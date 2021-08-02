const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const messaging = admin.messaging()
const db = admin.firestore();



exports.testFunction = functions.https.onCall(() => {
  console.info('Test Function triggered')
  return { message: "Yeaaahh it's working!" }
})
exports.karoobarAPI = functions.region('europe-west1').https.onCall(async (data) =>  {
 

  try {
    const rider_name = data.name;
    const team_id = data.team_id;
    const password = data.password;
    const request = data.request;

    console.log(rider_name)
            console.log(team_id)
            console.log(password)
            console.log(request)


    
    const docRef = db.collection('teams').doc(team_id);
        const getDoc = await docRef.get()
            .then(doc => {
                if (doc.exists) {
                  const passwordfromdb=doc.data().password

                  if(password==passwordfromdb){
                    var tRef = db.collection("teams").doc(team_id).collection("bar").doc();
                   
                   return tRef.set({
                      rider_name:data.name,
                      timestamp:admin.firestore.FieldValue.serverTimestamp(),
                      request:data.request
                      
                    });
                    
                      


                  }

                }

            })
            

            
        
          
    
  }
  
  catch (error)  {
      throw new functions.https.HttpsError('unknown', error)
  }


  return{message:"SUCCESS"}
  
});

exports.OnNewUserToDB = functions.region('europe-west1').auth.user().onCreate((user) => {
  return db.collection("users").doc(user.uid).set({
    email: user.email,
    displayName: user.displayName,
    uid: user.uid,
    photoURL:user.photoURL,

  })
});

exports.joinATeam = functions.region('europe-west1').https.onCall(async (data) =>  {
 

  try {
    const teamid = data.team_id;
    const password = data.password;
    const uid = data.uid;


    const docRef = db.collection('teams').doc(teamid);
        const getDoc = await docRef.get()
            .then(doc => {
                if (doc.exists) {
                  const passwordfromdb=doc.data().password

                  if(password==passwordfromdb){
                    var tRef = db.collection("teams").doc(teamid);
                      // Atomically add a new region to the "regions" array field.
                      return tRef.update({
                    members: admin.firestore.FieldValue.arrayUnion(uid)
                    });

                  }

                }

            })

        
          
    
  }
  
  catch (error)  {
      throw new functions.https.HttpsError('unknown', error)
  }


  return{message:"SUCCESS"}
  
});


exports.sendTestPushMessage = functions.region('europe-west1').https.onCall(async (data) => {
  // As defined in https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages
  const image =
    'https://avatars2.githubusercontent.com/u/4020037?s=460&u=c5f9c131d565202d8e530295b130239edd25768d&v=4'
  const message = {
    name: 'testPushMessage',
    data: {},
    notification: {
      title: `Test Push Message`,
      body: 'If you get this, it worked.',
      image,
    },
    android: {},
    webpush: {
      notification: {
        // Adds the image to the push notificationm
        icon: image,
        // Adds actions to the push notification
        actions: [
          {
            action: 'goToLupasGithub',
            title: 'Github: lupas',
            icon: '',
          },
          {
            action: 'goToModuleGithub',
            title: 'Firebase Module',
            icon: '',
          },
        ],
      },
      fcm_options: {
        // Adds a link to be opened when clicked on the push notification
        link: 'https://nuxt-fire-demo.herokuapp.com/',
      },
    },
    apns: {
      fcm_options: {},
    },
    fcm_options: {},
    token: data.token,
  }
  try {
    await messaging.send(message)
  } catch (e) {
    console.error(`Did not work to send a message to token ${message.token}`)
    console.error(e)
  }
})

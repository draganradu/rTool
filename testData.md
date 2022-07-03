display: superRadu
email: superRadu@fotodex.ro
pass: radu12345

udemy:
https://meditools.udemy.com/course/build-web-apps-with-react-firebase/learn/lecture/29072146#overview

rules:
https://console.firebase.google.com/project/tools-9c237/firestore/rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2022, 7, 27);
    }
  }
}
```
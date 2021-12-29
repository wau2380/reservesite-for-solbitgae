import firebase_admin
from firebase_admin import credentials
import firebase_admin import db

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred, {
    "databaseURl" : 'https://console.firebase.google.com/project/forschool-79f25/firestore/data/~2Fsolbitgae~2F0J9A6pD3owcJ6GILzJgZ'
})

dir = db.reference()
dir.update({})
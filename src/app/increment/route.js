import { database } from '@/lib/firebase';
import { getDatabase, get, ref, child, onValue } from "firebase/database";

//export async function GET() {

/* minimum example
const dbs = getDatabase();
const dbRef = ref(dbs, 'views');
return new Response(dbRef)
*/

//return new Response(getDatabase());

//}


export async function GET(req, res) {
  try {
    const db = getDatabase();
    // Continue with the rest of your code
  } catch (error) {
    console.error("Error initializing Firebase database:", error);
  }
  const viewsRef = ref(db, 'views.json');

  const snapshot = await get(viewsRef);

  if (snapshot.exists()) {
    res.status(200).send("hello");
  }
//curl 'https://max-on-ttps://max-on-tech-default-rtdb.europe-west1.fe.app/views.jsirebasedatabase.app/views.json'



  /*onValue(viewsRef, (snapshot) => {
    const data = snapshot.val();
    res.status(200).json(data);
  })*/
}



/*
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process POST request
    const data = req.body; // Your request's body
    // ...do something with the data...
    res.status(200).json({ message: 'Data received', data });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
*/
/*
if (req.method === 'POST') {
  const ref = db.ref('views').child(req.query.slug);
  const { snapshot } = await ref.transaction((currentViews) => {
    if (currentViews === null) {
      return 1;
    }

    return currentViews + 1;
  });

  return res.status(200).json({
    total: snapshot.val(),
  });
}
};*/


/*
export async function POST(){
  const ref = db.ref('views').child(req.query.slug);
  const { snapshot } = await ref.transaction((currentViews) => {
    if (currentViews === null) {
      return 1;
    }

    return currentViews + 1;
  });

  return res.status(200).json({
    total: snapshot.val(),
  });

}*/


/*
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process POST request
    // For example, you can send back the data that was sent in the request
    res.status(200).json({ data: req.body });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}*/


// http://localhost:3000/increment
/*
import { redirect } from 'next/navigation'
 
export async function GET(request) {
  redirect('https://nextjs.org/')
}*/
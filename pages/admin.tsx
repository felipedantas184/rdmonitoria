import Admin from "@/components/Admin";
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout/Layout";
import { collection, getDocs } from "firebase/firestore";

export async function getServerSideProps() {
  const firebaseUsers = await getDocs(collection(fireDB, "users"));
  const users:any = []
  firebaseUsers.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    users.push(obj)
  });

  return {
    props: {
      users
    }
  }
}

const AdminPage = ({users}:any) => {
  console.log(users)
  return ( 
    <Layout>
      <Admin users={users}/>
    </Layout>
   );
}
 
export default AdminPage;
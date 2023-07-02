import Admin from "@/components/Admin";
import { useAuth } from "@/context/AuthContext";
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout/Layout";
import { collection, getDocs } from "firebase/firestore";

import { useRouter } from "next/router";
import { useEffect } from 'react'


export async function getServerSideProps() {
  const firebaseUsers = await getDocs(collection(fireDB, "users"));
  const users: any = []
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

const AdminPage = ({ users }: any) => {
  const router = useRouter()
  const { user } = useAuth()

  const userData = users.filter((u: any) => u.id == user?.uid)
  const adminPrivilege = userData[0].admin

  useEffect(() => {
    if (!adminPrivilege) {
      router.push('/')
    }
  }, [adminPrivilege, router])


  return (
    <Layout>
      {(adminPrivilege) && (
        <Admin users={users} />
      )}
    </Layout>
  );
}

export default AdminPage;
import Userdetails from "../../components/user-details";
export default function staticProps({ users }) {
  return (
    <div>
      <h1>staticProps</h1>
      <Userdetails users={users} />;
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await response.json();
  console.log(res);
  return {
    props: {
      users: res,
    },
  };
}

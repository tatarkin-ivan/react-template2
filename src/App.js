import UserInfo from "./components/User/userInfo";

function App() {
  const workSkill = ["shop","fabric","school","factory","institute","restaurant","veterinary clinic"];
  const homePets =  ["cat","dog","mouse","snake"];
  const user = {
    firstName: "Vanya",
    age: 39,
    gender: "men",
    workSkill: workSkill,
    homePets: homePets
  };
  return (
    <>
      <UserInfo data={user}/>
    </>
  );
}

function Application(){
  
  return(
      [
        <h2 data={0} key={0}>Application</h2>,
        <h2 data={1} key={1}>Application</h2>
      ] 
  );
}

export {App, Application};

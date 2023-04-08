import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import {Routes,Route} from 'react-router-dom';
import EditPostPage from "./features/posts/EditPostPage";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import { Navigate } from "react-router-dom";

const App = ()=> {
  return (
   
      <Routes>
        <Route path = "/" element = {<Layout/>}>

        <Route index element = {<PostsList/>}/>

        <Route path = "post">
          <Route index element = {<AddPostForm/>}/>
          <Route path = ":id" element = {<SinglePostPage/>}/>
          <Route path = "edit/:id" element = {<EditPostPage/>}/>
        </Route>

        <Route path = "user">
        <Route index element = {<UsersList />} />
        <Route path = ":userId" element = {<UserPage />} />
        </Route>

        <Route path = "*" element = {<Navigate to = "/" replace = "/"/>} />

        </Route>
      </Routes>

  );
}

export default App;

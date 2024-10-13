import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/home'
import PostList from '../pages/posts/list'
import PostDetail from '../pages/posts/detail'
import PostNew from '../pages/posts/new'
import PostEdit from '../pages/posts/edit'
import Profile from '../pages/profile'
import Login from '../pages/login'
import Signup from '../pages/signup'

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/edit/:id" element={<PostEdit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* URL과 일치하는 페이지가 없을 경우 Home 로 이동 */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

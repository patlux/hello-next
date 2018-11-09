import { withRouter } from 'next/router';
import MyLayout from '../components/MyLayout';

const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
));

const Post = props => (
  <MyLayout>
    <Content />
  </MyLayout>
);

export default Post;

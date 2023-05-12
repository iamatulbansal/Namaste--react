import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>This is About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo,
        sunt sed eum voluptates distinctio libero iure autem ipsum culpa hic
        aspernatur porro architecto placeat cum ullam excepturi officiis ex.
      </p>
      {/* *Note- relative path not starting using '/' if you use '/' then your path attached to root path so don't Do that */}
      <Link to="profile">
        <b>Go to profile-section</b>
      </Link>
      <Outlet />
      {/* Outlet using related or nested routs always put inside your parent components */}
    </div>
  );
};

export default About;

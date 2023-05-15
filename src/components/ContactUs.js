import { useEffect, useState } from 'react';

const ContactUs = () => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    //This is fire one time componentDidMount

    //let try with setInterval
    const timer = setTimeout(async () => {
      const response = await fetch(
        'https://api.github.com/users/iamatulbansal'
      );
      const json = await response.json();
      // console.log(json);
      if (json) {
        setUserInfo(json);
        // console.log('Timer1');
      }
      // console.log('Timer2');
    }, 0);

    return () => {
      //this is fire after componentWillUnmount
      setTimeout(timer);
      // console.log('Clean-up');
    };
  }, []);
  // console.log('userInfo-Render', userInfo);
  return (
    <div>
      <h1>Contact us</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quod,
        excepturi blanditiis nesciunt eveniet modi adipisci saepe deserunt dolor
        quis, autem ut, cumque eos similique eaque? Consequuntur corrupti neque
        voluptatibus.
      </p>
    </div>
  );
};

export default ContactUs;

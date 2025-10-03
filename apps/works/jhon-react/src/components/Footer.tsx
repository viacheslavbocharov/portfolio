import Container from './Container';
import fb from '../assets/img/icon/fb.svg';
import insta from '../assets/img/icon/insta.svg';
import linkedin from '../assets/img/icon/linkedin.svg';
import twitter from '../assets/img/icon/twitter.svg';

export default function Footer() {
  return (
    <Container>
      <div className="my-6 sm:my-12">
        <div className="flex gap-8 justify-center mb-6">
          <a href="/">
            <img src={fb} alt="fb" />
          </a>
          <a href="/">
            <img src={insta} alt="instagram" />
          </a>
          <a href="/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        <p className="text-center">Copyright ©2020 All rights reserved </p>
      </div>
    </Container>
  );
}

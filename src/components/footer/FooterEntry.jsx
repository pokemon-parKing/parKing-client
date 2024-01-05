import PropTypes from 'prop-types';
import LinkedInSVG from '../../assets/icons/linkedinIcon.svg';
import GitHubSVG from '../../assets/icons/github.svg';

function FooterEntry({ entry }) {
  const [name, github, linkedin] = entry;
    
  return (
    <div className='flex flex-col gap-2 items-center'>
        <span className="text-center text-xl">{name}</span>
        <div className='flex '> 
          <a href={github}><img src={GitHubSVG}></img></a>
          <a href={linkedin}><img src={LinkedInSVG}></img></a>
        </div>
        

    </div>
  );
}

FooterEntry.propTypes = {
  entry: PropTypes.object.isRequired,
}

export default FooterEntry;
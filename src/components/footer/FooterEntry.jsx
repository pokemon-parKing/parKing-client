import PropTypes from 'prop-types';
import LinkedInSVG from '../../assets/icons/linkedinIcon.svg';
import GitHubSVG from '../../assets/icons/github.svg';

function FooterEntry({ entry }) {
  const [name, github, linkedin] = entry;

  return (
    <div className='flex flex-col items-center justify-between w-[250px] p-2'>
        <span className="text-center text-xl mb-0 font-medium">{name}</span>
        <div className='flex'>
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
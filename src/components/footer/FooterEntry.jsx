import PropTypes from 'prop-types';

function FooterEntry({ entry }) {
  const [name, github, linkedin] = entry;
    
  return (
    <div className='flex flex-col gap-2'>
        <span className="text-xs flex">{name}</span>
        <span className="text-xs flex">{github}</span>
        <span className="text-xs flex">{linkedin}</span>
    </div>
  );
}

FooterEntry.propTypes = {
  entry: PropTypes.object.isRequired,
}

export default FooterEntry;
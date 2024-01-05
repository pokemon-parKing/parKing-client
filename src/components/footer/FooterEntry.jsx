import PropTypes from 'prop-types';

function FooterEntry({ entry }) {
  return (
    <div className='flex flex-col gap-2'>
        {Object.entries(entry).map(([key, value]) => (
            <span key={key} className="text-xs">
              {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
            </span>
        ))}
    </div>
  );
}

FooterEntry.propTypes = {
  entry: PropTypes.object.isRequired,
}

export default FooterEntry;
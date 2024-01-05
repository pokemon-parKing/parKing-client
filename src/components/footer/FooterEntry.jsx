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

export default FooterEntry;
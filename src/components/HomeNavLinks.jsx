const HomeNavLinks = ({ href, name }) => {
  return (
    <a
      className="text-slate-400 hover:text-[#335e43] font-bold text-[12px] pb-2 hover:pb-1 border-b-0 hover:border-b-2 hover:border-[#48835e]"
      href={href}
    >
      {name}
    </a>
  );
};

export default HomeNavLinks;

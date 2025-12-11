const Footer = () => {
  return (
    <footer className="p-6 bg-gray-800 text-gray-200">
      <div className="container mx-auto p-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} My Website
        </p>
      </div>
    </footer>
  );
};

export default Footer;
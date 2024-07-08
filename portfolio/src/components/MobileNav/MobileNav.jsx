import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['Home', 'Experience', 'Projects', 'About', 'Contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {['Home', 'Experience', 'Projects', 'About', 'Contact'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton 
            
              onClick={() => scrollToSection(text)}
              selected={activeSection === text}
            >
              <ListItemIcon>
                {text === "Home" && <HomeIcon />}
                {text === "Experience" && <WorkIcon />}
                {text === "Projects" && <AccountTreeIcon />}
                {text === "About" && <PersonIcon />}
                {text === "Contact" && <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button 
        style={{ transform: 'scale(1.5)', marginTop: '3%', position: 'fixed', top: 10, left: 10, zIndex: 1000 }} 
        onClick={toggleDrawer(true)}
      >
        <MenuIcon  sx={{
  transform: 'scale(1.5)',
  marginTop: '3%',
  position: 'fixed',
  top: 10,
  left: 20,
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly opaque background
  borderRadius: '50%',
  padding: '1px',
  backdropFilter: 'blur(10px)', // Apply blur effect to the background
  webkitBackdropFilter: 'blur(10px)', // For Safari support
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Slightly more opaque on hover
  },
}}
/>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default MobileNav;
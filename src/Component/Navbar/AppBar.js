import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import ToolTipPositions from '../popup'


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {

  console.log(props)

  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // function handleProfileMenuOpen(event) {
  //   setAnchorEl(event.currentTarget);
  // }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  // function handleMenuClose() {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  // const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 1 new mails" color="inherit">
          <Badge badgeContent={1} color="secondary">
            <FaHeart />
          </Badge>
        </IconButton>
        <p>My WishList</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 2 new notifications" color="inherit">
          <Badge badgeContent={props.cart.length} color="secondary">
            <FaCartPlus />
          </Badge>
        </IconButton>
        <p>Add to Cart</p>
      </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <img src="http://danasigns.com/wp-content/uploads/2016/02/Danas-Shirt-Shop-Logo-Cropped-e1470784917333.png" style={{ height: "70px", width: "100px" }} />
          <Typography className={classes.title} variant="h6" noWrap>
            Saylani Online Store
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Link to="/" style={{ color: "white", margin: "10px" }}>Home</Link>
          <Link to="/shop" style={{ color: "white", margin: "10px" }}>Shop</Link>
          <Link to="/about" style={{ color: "white", margin: "10px" }}>About</Link>
          <Link to="/signup" style={{ color: "white", margin: "10px" }}>SignIn</Link>
          <Link to="/login" style={{ color: "white", margin: "10px" }}>Log In</Link>





          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 2 new notifications" color="inherit">
              <Badge badgeContent={props.cart.length} color="secondary">
                <ToolTipPositions value={props.cart} img={<FaCartPlus />} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 1 new mails" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <FaHeart />
              </Badge>
            </IconButton>


          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
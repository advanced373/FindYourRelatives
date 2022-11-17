import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
  return (
    <Nav className="justify-content-center" activeKey="/home">
        {props.navigationItems.items.map((res) => {
        var opts = {};
        if (res.isDisabled === 'true') {
            opts['disabled'] = 'disabled';
        }
        return <Nav.Item>
          <Nav.Link href={res.path} key={res.internalName} {...opts}>{res.displayName}</Nav.Link>
        </Nav.Item>
    })}
      </Nav>
  );
}

export default Navigation;
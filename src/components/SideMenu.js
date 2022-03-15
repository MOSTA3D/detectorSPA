
function SideMenu (props){

    const { sideMenu } = props;

    return(
        <div className={"side-menu" + (sideMenu ? " open":"")}>
        </div>
    );
}

export default SideMenu;
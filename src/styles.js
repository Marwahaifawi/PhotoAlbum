import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
   // backgroundColor
    padding:' 50px',
  },
  icon:{
    marginRight:'20px'

  },
  buttons:{
    marginTop:'40px'

  },
  cardGrid:{
    padding:'20px 0'

  },
  cards:{
    height:'100%',
    display:'flex',
    flexDirection:'column'

  },
  cardMedia:{
    paddingTop:'56.25%' //16:9

  },
  cardContent:{
    flexGrow:1

  },
  footer:{
    padding:'50px 0',
    backgroundColor:'gray'
  }
}));
export default useStyles
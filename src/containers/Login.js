import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import { login } from '../redux/auth';

const mapActionsToProps = { login };

export default connect(null, mapActionsToProps)(LoginForm)
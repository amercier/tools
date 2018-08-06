import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import rmwcTestPolyfill from 'rmwc/Base/testPolyfill';

Enzyme.configure({ adapter: new Adapter() });

// import and run this to fix the the MDC errors
rmwcTestPolyfill();

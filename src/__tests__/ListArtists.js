import React from "react";
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import { Artists } from '../components/Artists'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('<Artists />', () => {
  it('renders three <Artist /> components', () => {
    const wrapper = shallow(<Artists />);
    expect(wrapper.find('.ArtistsList')).to.have.lengthOf(3);
  });
})
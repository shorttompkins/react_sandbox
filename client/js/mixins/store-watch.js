import AppStore from '../stores/store';

export default function(callback) {
  return {
    getInitialState() {
      return callback();
    },
    componentWillMount() {
      AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount() {
      AppStore.removeChangeListener(this._onChange);
    },
    _onChange() {
      this.setState(callback());
    }
  };
}

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBatmanShowList } from '../redux/actions/batmanShowsActions';
import Card from '../components/CardComponent';

function HomePage(props) {
  const { shows, fetchBatmanShowList } = props;

  useEffect(() => {
    fetchBatmanShowList();
  }, []);

  return <Card data={shows} />;
}

const mapStateToProps = state => {
  const { shows } = state.shows;
  return { shows };
};

const mapDispatchToProps = {
  fetchBatmanShowList
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

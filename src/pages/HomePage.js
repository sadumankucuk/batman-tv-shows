import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBatmanShowList } from '../redux/actions/batmanShowsActions';
import Card from '../components/CardComponent';

function HomePage(props) {
  const { shows, fetchBatmanShowList } = props;

  useEffect(() => {
    fetchBatmanShowList();
  }, [fetchBatmanShowList]);

  return <Card data={shows} />;
}

const mapStateToProps = state => {
  const { loadingShowList, shows, errorShowList } = state.shows;
  return { loadingShowList, shows, errorShowList };
};

const mapDispatchToProps = {
  fetchBatmanShowList
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

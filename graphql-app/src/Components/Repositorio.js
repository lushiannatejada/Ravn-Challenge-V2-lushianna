import React, { Component, useState } from 'react';
import  {useQuery} from '@apollo/react-hooks';
import { Spinner, Button } from 'reactstrap';
import Personajes from './Resultados';
import Query from './Graphql/Query';

const updateQuery = (previousResult, { fetchMoreResult }) => {
    return fetchMoreResult.allPeople.people.length ? fetchMoreResult : previousResult;
  };
  const PostList = ({ data, error, loading, fetchMore }) => {
    const { allPeople } = data;
    const [pag, setPag] = useState(5);
    console.log('pag' + pag);
    return (
      <div>
        <h2>Resultados</h2>
        {allPeople && allPeople.people ? (
          <div>
            <React.Fragment>
            <div className ="row">
              {allPeople.people.map(people => (
                <Personajes
                  key = {people.id}
                  people={people}
                  films ={people.filmConnection.films}
              />
              ))}
              </div>
            </React.Fragment>
            <p></p>
            <div className="justify-content-center">
              {allPeople.pageInfo.hasPreviousPage ? (
                <Button
                  onClick={() => {
                    setPag(pag-5);
                    fetchMore({
                      variables: {
                        first: pag,
                        after: null,
                        last: 5,
                        before: null
                      },
                      updateQuery                      
                    });
                  }}
                >
                  Previous
                </Button>
              ) : null}
              {allPeople.pageInfo.hasNextPage ? (
                <Button
                  onClick={() => {
                    setPag(pag+5);
                    fetchMore({
                      variables: {
                        first: pag,
                        after: null,
                        last: 5,
                        before: null
                      },
                      updateQuery
                    });
                  }}
                >
                  Next
                </Button>
              ) : null}
            </div>
            <p></p>
          </div>
        ) : (
          <div> No posts were found...</div>
        )}
      </div>
    );
  };

function Results ({nombre}) {
    const variables = {
        first: 5,
        last: null,
        after: null,
        before: null
      };
    const {data, error, loading, fetchMore} = useQuery(Query, {
        variables});
    
    if (loading) return <Spinner color="dark" />;
    if (error) return <pre>{JSON.stringify(error)}</pre>;
    return (<PostList
        error={error}
        loading={loading}
        data={data}
        fetchMore={fetchMore}
    />);
};


export {Results};
       
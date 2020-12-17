import  {gql} from 'apollo-boost';
const Query = gql`
    query GET_PAGINATED_POSTS(
        $first: Int
        $last: Int
        $after: String
        $before: String
    ){
        allPeople(first: $first, last: $last, after: $after, before: $before){
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            totalCount
            people{
                id
                name
                birthYear
                created
                gender
                height
                mass
                eyeColor
                hairColor
                skinColor
                homeworld {
                    name
                  }
                filmConnection {
                    films{
                      title
                    }
                  }
            }
        }
    }
`;

export default Query;
import React from "react";
import Button from '@material-ui/core/Button';
import { InstantSearch, Hits } from 'react-instantsearch-dom';
import SearchBox from "react-instantsearch-dom/dist/cjs/widgets/SearchBox";

export default class AlgoliaSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <InstantSearch
                appId={process.env.REACT_APP_ALGOLIA_APP_ID}
                apiKey={process.env.REACT_APP_ALGOLIA_API_KEY}
                indexName={process.env.REACT_APP_ALGOLIA_INDEX_NAME}
            >
            
                <SearchBox/>
                <Hits />
            </InstantSearch>
        );
    }
}

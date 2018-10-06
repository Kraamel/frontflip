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
                appId="RSXBUBL0PB"
                apiKey="4f810fbd75bdd775c67c8d477dce7746"
                indexName="dev_world"
            >
                <SearchBox/>
                <Hits />
            </InstantSearch>
        );
    }
}

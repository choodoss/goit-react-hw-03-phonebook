import PropTypes from 'prop-types';
import { SerchSection, Label, Input } from './Search.styled'

export default function Search({ hendleFilterProp, inputIdFilter, filter }) {
    const search =
        <SerchSection>
            <Label htmlFor={inputIdFilter}>Finde contact by name </Label>
            <Input id={inputIdFilter}
                name="filter"
                pattern="[\p{L} '-]+"
                value={filter}
                onChange={hendleFilterProp} />
        </SerchSection>
    return search;
};


Search.protoType = {
    hendleFilterProp: PropTypes.func,
    inputIdFilter: PropTypes.string,
    filter: PropTypes.string,
}


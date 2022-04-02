import {config, list} from '@keystone-6/core';
import {text, integer} from '@keystone-6/core/fields';

export default config({
    db: {
        provider: 'sqlite',
        url: 'file:./keystone.db',
    },
    lists: {
        Player: list({
            fields: {
                name: text({validation: {isRequired: true}, isIndexed: 'unique'}),
                seed: text({validation: {isRequired: true}, isIndexed: 'unique'}),
                rooms_cleared: integer({
                    defaultValue: 0,
                    validation: {
                        isRequired: true,
                    },
                })
            },
        }),
    },
});
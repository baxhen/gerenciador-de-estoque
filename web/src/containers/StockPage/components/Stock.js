import React, { memo, useEffect } from 'react'
import { styles } from './styles'
import { Grid, List, ListItemText, ListItem, Divider } from '@material-ui/core'
// import { SelectField } from 'components/ReduxForm/Select/SelectField'
// import { history } from '../../../history'

const useStyles = styles

function Stock({ dispatchGetStock, stock }) {
  const classes = useStyles()
  // const [selectedSupplier, setSelectedSupplier] = useState('')

  useEffect(() => {
    dispatchGetStock()
    // eslint-disable-next-line
  }, [dispatchGetStock])
  return (
    <main className={classes.content}>
      <Grid container direction="column">
        <Grid item>
          <List>
            {stock.map(({ name, quantity, productId }) => (
              <div key={name}>
                <ListItem>
                  <ListItemText
                    className={classes.listItem}
                    primary={`${name} `}
                    secondary={`ID do Produto: ${productId} - Quantidade em estoque: ${quantity}`}
                  />
                </ListItem>
                <Divider className={classes.divider} variant="inset" />
              </div>
            ))}
          </List>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Stock)

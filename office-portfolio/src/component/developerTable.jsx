import React from 'react'
import { Table } from 'semantic-ui-react'

const colors = [
    'blue',
]

const TableExampleColors = () => (
    <div>
        {colors.map(color => (
            <Table color={color} key={color}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Protein</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Apples</Table.Cell>
                        <Table.Cell>200</Table.Cell>
                        <Table.Cell>0g</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Orange</Table.Cell>
                        <Table.Cell>310</Table.Cell>
                        <Table.Cell>0g</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        ))}
    </div>
)
export default TableExampleColors
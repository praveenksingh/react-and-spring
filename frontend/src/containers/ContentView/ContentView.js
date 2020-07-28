import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import React from 'react';
import './ContentView.scss';

export class ContentView extends React.Component {
    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTableBodyCell: {
                root: {
                    backgroundColor: "#white"
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    backgroundColor: 'purple',
                    fontWeight: "bold",
                    fontSize: "15px",
                }
            },
            MUIDataTableSelectCell: {
                headerCell: {
                    backgroundColor: 'blue',
                }
            },
        }
    })
    render() {
        const columns = ["Name","Company","City","State"];
        const data = [
            ["Joe James", "Test Corp", "Yonkers", "NY"],
            ["John Walsh", "Test Corp3", "Hartford", "CT"],
            ["John Walsh", "Test Corp", "Hartford", "CT"],
            ["John Walsh", "Test Corp2", "Hartford", "CT"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["Bob Herm", "Test Corp2", "Tampa", "FL"],
            ["Bob Herm", "Test Corp2", "Tampa", "FL"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["Bob Herm", "Test Corp3", "Tampa", "FL"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["James Houston", "Test Corp2", "Dallas", "TX"],
            ["James Houston", "Test Corp2", "Dallas", "TX"],
            ["James Houston", "Test Corp2", "Dallas", "TX"],
            ["James Houston", "Test Corp3", "Dallas", "TX"],
            ["James Houston", "Test Corp", "Dallas", "TX"],
            ["James Houston", "Test Corp", "Dallas", "TX"],
            ["James Houston", "Test Corp3", "Dallas", "TX"],
        ];

        const options = {
            // filterType: 'checkbox',
            selectableRows: 'none',
            print: false,
            rowsPerPage: 25,
            rowsPerPageOptions: [25, 50 ,100]
        };
        console.log("hello from inside")
        return (
            <div className='content-view'>

                <MuiThemeProvider theme={this.getMuiTheme()}>
                        <MUIDataTable
                            title={"Employee List"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default ContentView;

import React from 'react';
import './ContentViewOriginal.scss';
import {connect} from 'react-redux';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


const customStyles = theme => ({
    BusinessAnalystRow: {
        '& td': {textDecoration: "line-through"},
    },
    NameCell: {
        fontWeight: 900,
        backgroundColor: "blue"
    },
});

export class ContentViewOriginal extends React.Component {
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
        const columns = [
            {
                name: 'Name',
                options: {
                    filter: true,
                    setCellProps: value => {
                        return {
                            className: clsx({
                                [this.props.classes.NameCell]: value === 'Mel Brooks',
                            }),
                            style: {
                                //borderRight: '2px solid blue'
                            }
                        };
                    },
                    setCellHeaderProps: value => {
                        return {
                            className: clsx({
                                [this.props.classes.NameCell]: true,
                            }),
                            style: {
                                textDecoration: 'underline',
                            },
                        };
                    },
                },
            },
            {
                name: 'Title',
                options: {
                    filter: true,
                    setCellHeaderProps: value => ({ style: { textDecoration: 'underline' } }),
                },
            },
            {
                name: 'Location',
                options: {
                    filter: false,
                },
            },
            {
                name: 'Age',
                options: {
                    filter: true,
                },
            },
            {
                name: 'Salary',
                options: {
                    filter: true,
                    sort: false,
                },
            },
        ];

        const data = [
            ['Gabby George', 'Business Analyst', 'Minneapolis', 30, 100000],
            ['Aiden Lloyd', 'Business Consultant', 'Dallas', 55, 200000],
            ['Jaden Collins', 'Attorney', 'Santa Ana', 27, 500000],
            ['Franky Rees', 'Business Analyst', 'St. Petersburg', 22, 50000],
            ['Aaren Rose', 'Business Consultant', 'Toledo', 28, 75000],
            ['Blake Duncan', 'Business Management Analyst', 'San Diego', 65, 94000],
            ['Frankie Parry', 'Agency Legal Counsel', 'Jacksonville', 71, 210000],
            ['Lane Wilson', 'Commercial Specialist', 'Omaha', 19, 65000],
            ['Robin Duncan', 'Business Analyst', 'Los Angeles', 20, 77000],
            ['Mel Brooks', 'Business Consultant', 'Oklahoma City', 37, 135000],
            ['Harper White', 'Attorney', 'Pittsburgh', 52, 420000],
            ['Kris Humphrey', 'Agency Legal Counsel', 'Laredo', 30, 150000],
            ['Frankie Long', 'Industrial Analyst', 'Austin', 31, 170000],
            ['Brynn Robbins', 'Business Analyst', 'Norfolk', 22, 90000],
            ['Justice Mann', 'Business Consultant', 'Chicago', 24, 133000],
            ['Addison Navarro', 'Business Management Analyst', 'New York', 50, 295000],
            ['Jesse Welch', 'Agency Legal Counsel', 'Seattle', 28, 200000],
            ['Eli Mejia', 'Commercial Specialist', 'Long Beach', 65, 400000],
            ['Gene Leblanc', 'Industrial Analyst', 'Hartford', 34, 110000],
            ['Danny Leon', 'Computer Scientist', 'Newark', 60, 220000],
            ['Lane Lee', 'Corporate Counselor', 'Cincinnati', 52, 180000],
            ['Jesse Hall', 'Business Analyst', 'Baltimore', 44, 99000],
            ['Danni Hudson', 'Agency Legal Counsel', 'Tampa', 37, 90000],
            ['Terry Macdonald', 'Commercial Specialist', 'Miami', 39, 140000],
            ['Justice Mccarthy', 'Attorney', 'Tucson', 26, 330000],
            ['Silver Carey', 'Computer Scientist', 'Memphis', 47, 250000],
            ['Franky Miles', 'Industrial Analyst', 'Buffalo', 49, 190000],
            ['Glen Nixon', 'Corporate Counselor', 'Arlington', 44, 80000],
            ['Gabby Strickland', 'Business Process Consultant', 'Scottsdale', 26, 45000],
            ['Mason Ray', 'Computer Scientist', 'San Francisco', 39, 142000],
        ];

        const options = {
            filter: true,
            filterType: 'dropdown',
            selectableRows: 'none',
            print: false,
            rowsPerPage: 20,
            rowsPerPageOptions: [20, 50 ,100],
            rowHover: true,
            setRowProps: row => {
                return {
                    className: clsx({
                        [this.props.classes.BusinessAnalystRow]: row[1] === 'Business Analyst',
                    }),
                };
            }
        };
        // const columns = [
        //     {
        //         name: "Name",
        //         options: {
        //             filter: false
        //         }
        //     },
        //     {
        //         name: "Company"
        //     },
        //     {
        //         name: "City",
        //         options: {
        //             filter: false
        //         }
        //     },
        //     {
        //         name: "State",
        //         options: {
        //             filter: false
        //         }
        //     }
        //     ];
        //
        // const data = [
        //     ["Joe James", "Test Corp", "Yonkers", "NY"],
        //     ["John Walsh", "Test Corp3", "Hartford", "CT"],
        //     ["John Walsh", "Test Corp3", "Hartford", "CT"],
        //     ["John Walsh", "Test Corp3", "Hartford", "CT"],
        //     ["John Walsh", "Test Corp", "Hartford", "CT"],
        //     ["John Walsh", "Test Corp2", "Hartford", "CT"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp2", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp2", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp3", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp2", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp3", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp3", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp2", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
        //     ["James Houston", "Test Corp2", "Dallas", "TX"],
        //     ["James Houston", "Test Corp2", "Dallas", "TX"],
        //     ["James Houston", "Test Corp2", "Dallas", "TX"],
        //     ["James Houston", "Test Corp3", "Dallas", "TX"],
        //     ["James Houston", "Test Corp", "Dallas", "TX"],
        //     ["James Houston", "Test Corp", "Dallas", "TX"],
        //     ["James Houston", "Test Corp3", "Dallas", "TX"],
        //     ["James Houston", "Test Corp", "Dallas", "TX"],
        //     ["James Houston", "Test Corp", "Dallas", "TX"],
        //     ["James Houston", "Test Corp", "Dallas", "TX"],
        //     ["James Houston", "Test Corp3", "Dallas", "TX"],
        // ];
        //
        // const options = {
        //     filterType: 'checkbox',
        //     selectableRows: 'none',
        //     print: false,
        //     rowsPerPage: 25,
        //     rowsPerPageOptions: [25, 50 ,100],
        //     setRowProps: (row, dataIndex, rowIndex) => {
        //         // if (row[0] === "Bob Herm") {
        //         //     console.log(row)
        //         //     console.log(dataIndex)
        //         //     console.log(rowIndex)
        //         //     return {
        //         //         style: { background: "#008000", fontWeight: 900 },
        //         //     };
        //         // }
        //         className: clsx({
        //             [this.props.classes.MutedRow]: row[0] === 'Bob Herm',
        //         })
        //     }
        // };
        console.log("hello from inside")
        return (
            <div className='home-content'>
                {/*<div className="responsive-mapping-grid-container">*/}
                    {/*<div className='data-grid'>*/}
                <MuiThemeProvider theme={this.getMuiTheme()}>
                        <MUIDataTable
                            title={"Employee List"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                </MuiThemeProvider>
                        {/*<InfiniteScroll bottomReachedCallback={this.props.bottomReachedCallback} showLoader={this.props.showLoader}>*/}
                        {/*    <VideoGrid title='Trending' videos={trendingVideos}/>*/}
                        {/*    {categoryGrids}*/}
                        {/*</InfiniteScroll>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}


function getRequiredData() {
    console.log("inside this")
    return {
    };
}

// export default withStyles(customStyles)(ContentViewOriginal);
export default connect(getRequiredData, null)(ContentViewOriginal);

<template>
  <div>
    <ve-table border-y :columns="columns" :table-data="tableFormat" :footer-data="footerData"></ve-table>
    <ve-pagination :page-index="pageIndex" :page-size="pageSize" :total="totalCount" @on-page-number-change="pageNumberChange" @on-page-size-change="pageSizeChange" style="display: flex; margin: 24px auto; justify-content: center"></ve-pagination>
  </div>
</template>

<script>
  export default {
    name: "table_mockup",
    data() {
      return {
        pageIndex: 1,
        pageSize: 10,
        columns: [
          { field: "name", key: "a", title: "Name", align: "center" },
          { field: "phone", key: "b", title: "Phone", align: "center" },
          { field: "address", key: "c", title: "Address", align: "left" },
          { field: "postalZip", key: "d", title: "Postal Zip", align: "right" },
          { field: "region", key: "e", title: "Region", align: "left" },
          { field: "value", key: "f", title: "Value", align: "right" }
        ],
        tableData: [
          {
            name: "Ashely Fitzpatrick",
            phone: "1-324-952-3680",
            address: "Ap #253-477 Lacus. Ave",
            postalZip: "461673",
            region: "Leinster",
            value: 69
          },
          {
            name: "Keane Mcclure",
            phone: "(324) 800-1770",
            address: "Ap #359-6449 Orci Road",
            postalZip: "81803",
            region: "Puglia",
            value: 87
          },
          {
            name: "Hiram Sampson",
            phone: "(252) 974-7503",
            address: "912-1521 Neque. St.",
            postalZip: "704684",
            region: "Hải Dương",
            value: 54
          },
          {
            name: "Keegan Dunlap",
            phone: "(276) 811-4078",
            address: "Ap #287-1765 Odio Avenue",
            postalZip: "69487",
            region: "North Island",
            value: 93
          },
          {
            name: "Nigel Strong",
            phone: "(916) 285-1855",
            address: "Ap #749-1652 Lectus Rd.",
            postalZip: "B1Y 3N6",
            region: "La Libertad",
            value: 14
          },
          {
            name: "Dustin Eaton",
            phone: "(106) 649-8108",
            address: "203-3812 Etiam Road",
            postalZip: "32073",
            region: "Bauchi",
            value: 95
          },
          {
            name: "Aristotle Ratliff",
            phone: "1-448-848-9134",
            address: "514-6785 Diam. Rd.",
            postalZip: "58157-584",
            region: "Baja California",
            value: 62
          },
          {
            name: "Maile Case",
            phone: "(956) 473-5442",
            address: "886-1996 Neque. Avenue",
            postalZip: "8202",
            region: "Møre og Romsdal",
            value: 83
          },
          {
            name: "Hunter Taylor",
            phone: "1-455-641-5625",
            address: "374-9896 Fermentum St.",
            postalZip: "829337",
            region: "Henegouwen",
            value: 11
          },
          {
            name: "Madeline Puckett",
            phone: "1-234-542-6260",
            address: "Ap #859-7235 Lorem, Road",
            postalZip: "6763-4760",
            region: "Swiętokrzyskie",
            value: 9
          },
          {
            name: "Graiden Allen",
            phone: "(209) 613-9592",
            address: "P.O. Box 442, 4528 Eleifend St.",
            postalZip: "15122",
            region: "Puntarenas",
            value: 86
          },
          {
            name: "Oleg Grimes",
            phone: "1-675-721-1036",
            address: "P.O. Box 104, 4698 Vulputate Street",
            postalZip: "60248",
            region: "Mississippi",
            value: 18
          },
          {
            name: "Reese Cooley",
            phone: "1-558-447-1262",
            address: "Ap #865-5393 Est. Avenue",
            postalZip: "I8S 5KA",
            region: "Vestland",
            value: 48
          },
          {
            name: "Adena Ramos",
            phone: "(253) 634-1647",
            address: "P.O. Box 792, 9796 Sed Ave",
            postalZip: "02722-67853",
            region: "Western Visayas",
            value: 14
          },
          {
            name: "Melvin Larson",
            phone: "(686) 831-3570",
            address: "Ap #942-7936 Nunc Ave",
            postalZip: "E76 4IV",
            region: "Xīnán",
            value: 97
          },
          {
            name: "Heidi Rowland",
            phone: "(331) 187-3717",
            address: "P.O. Box 893, 6199 Est. Road",
            postalZip: "31-524",
            region: "Zuid Holland",
            value: 8
          },
          {
            name: "Jacob Waller",
            phone: "(357) 658-2078",
            address: "P.O. Box 354, 9476 Nisl. St.",
            postalZip: "386684",
            region: "Munster",
            value: 22
          },
          {
            name: "Wanda Porter",
            phone: "1-724-767-0882",
            address: "P.O. Box 849, 7996 Augue Road",
            postalZip: "08538",
            region: "Hawaii",
            value: 55
          },
          {
            name: "Castor Case",
            phone: "(228) 326-3485",
            address: "210-199 Nam Rd.",
            postalZip: "65332-546",
            region: "Wielkopolskie",
            value: 48
          },
          {
            name: "Kylee Beard",
            phone: "(767) 874-8991",
            address: "524-2549 Etiam Rd.",
            postalZip: "59260-55254",
            region: "Burgenland",
            value: 61
          },
          {
            name: "Brielle Cross",
            phone: "1-623-732-7852",
            address: "629-1503 Nec Street",
            postalZip: "83425",
            region: "Victoria",
            value: 75
          },
          {
            name: "Gareth Roy",
            phone: "1-751-627-8571",
            address: "P.O. Box 621, 5304 Dictum Street",
            postalZip: "BL4 1AE",
            region: "Dōngběi",
            value: 19
          },
          {
            name: "Kuame Johnson",
            phone: "(274) 428-1370",
            address: "490-4678 Et Rd.",
            postalZip: "J47 1OW",
            region: "North Sumatra",
            value: 71
          },
          {
            name: "Karleigh Hoover",
            phone: "1-340-384-1687",
            address: "357-8580 Vestibulum Rd.",
            postalZip: "614791",
            region: "KwaZulu-Natal",
            value: 48
          },
          {
            name: "Mia Ballard",
            phone: "(412) 714-3745",
            address: "9541 Risus Avenue",
            postalZip: "1951",
            region: "Araucanía",
            value: 31
          },
          {
            name: "Yen Davidson",
            phone: "(743) 491-4473",
            address: "218-650 Interdum Street",
            postalZip: "0724",
            region: "Davao Region",
            value: 56
          },
          {
            name: "Yardley Summers",
            phone: "(810) 631-8134",
            address: "850-8442 Fusce St.",
            postalZip: "2276",
            region: "Chhattisgarh",
            value: 91
          },
          {
            name: "Orli Dixon",
            phone: "(457) 930-3187",
            address: "Ap #402-8441 Ac Av.",
            postalZip: "71417",
            region: "Ceará",
            value: 26
          },
          {
            name: "Gregory Camacho",
            phone: "1-795-472-7678",
            address: "Ap #564-2446 Tristique Rd.",
            postalZip: "762262",
            region: "Cagayan Valley",
            value: 73
          },
          {
            name: "Clark Noel",
            phone: "1-681-892-1349",
            address: "654-6709 Tristique St.",
            postalZip: "5218",
            region: "Alaska",
            value: 66
          },
          {
            name: "Ishmael Richmond",
            phone: "(723) 577-1030",
            address: "5237 Aliquet, St.",
            postalZip: "76717-822",
            region: "Tyrol",
            value: 64
          },
          {
            name: "Burton Ball",
            phone: "(371) 285-5856",
            address: "Ap #787-9141 Tristique Rd.",
            postalZip: "603527",
            region: "Cagayan Valley",
            value: 65
          },
          {
            name: "Aidan Bright",
            phone: "(810) 293-1180",
            address: "Ap #101-5470 Quis Road",
            postalZip: "2862",
            region: "Limburg",
            value: 78
          },
          {
            name: "Odessa Solis",
            phone: "1-315-835-2671",
            address: "192-380 Vel Rd.",
            postalZip: "51758",
            region: "Goa",
            value: 52
          },
          {
            name: "Velma Russo",
            phone: "(745) 328-8726",
            address: "3295 Non Av.",
            postalZip: "53-27",
            region: "Stockholms län",
            value: 31
          },
          {
            name: "Hedwig Kemp",
            phone: "1-156-662-3632",
            address: "523-974 Metus St.",
            postalZip: "732767",
            region: "Southwestern Tagalog Region",
            value: 20
          },
          {
            name: "Priscilla Austin",
            phone: "1-674-544-2727",
            address: "104-721 Magna. St.",
            postalZip: "63475",
            region: "Bangka Belitung Islands",
            value: 61
          },
          {
            name: "Tashya Huffman",
            phone: "1-664-277-9212",
            address: "Ap #102-7598 Accumsan St.",
            postalZip: "61412",
            region: "Van",
            value: 54
          },
          {
            name: "Heather Lester",
            phone: "(476) 236-9095",
            address: "P.O. Box 481, 9895 Aliquet Road",
            postalZip: "2127",
            region: "Casanare",
            value: 51
          },
          {
            name: "Amela Harrington",
            phone: "1-877-708-6244",
            address: "Ap #214-7733 In, Rd.",
            postalZip: "33301-20574",
            region: "Western Cape",
            value: 76
          },
          {
            name: "Zeus Murray",
            phone: "(534) 618-4618",
            address: "Ap #734-997 Mi Rd.",
            postalZip: "65342",
            region: "Calabarzon",
            value: 19
          },
          {
            name: "Channing Sheppard",
            phone: "1-491-968-8927",
            address: "160-2776 Cursus Avenue",
            postalZip: "661773",
            region: "North Jeolla",
            value: 14
          },
          {
            name: "Fiona James",
            phone: "1-496-203-1257",
            address: "436-1968 Quisque Rd.",
            postalZip: "73241-93711",
            region: "Free State",
            value: 49
          },
          {
            name: "Naida Nieves",
            phone: "(536) 312-8726",
            address: "2299 Nibh. Street",
            postalZip: "65717",
            region: "Nariño",
            value: 71
          },
          {
            name: "Travis Lancaster",
            phone: "(776) 577-3647",
            address: "2274 Pede Av.",
            postalZip: "SX7 6RB",
            region: "Jönköpings län",
            value: 46
          },
          {
            name: "Fleur Kent",
            phone: "1-561-708-8485",
            address: "P.O. Box 285, 8434 Vestibulum. St.",
            postalZip: "21602",
            region: "Nordland",
            value: 73
          },
          {
            name: "Ivory Deleon",
            phone: "(845) 256-3382",
            address: "Ap #286-5774 Accumsan St.",
            postalZip: "6468",
            region: "Eastern Cape",
            value: 32
          },
          {
            name: "Herrod Schneider",
            phone: "(436) 230-0874",
            address: "Ap #866-2309 Lobortis St.",
            postalZip: "05-532",
            region: "Guanacaste",
            value: 73
          },
          {
            name: "Cleo Wilson",
            phone: "1-415-545-6247",
            address: "6505 Ultrices Avenue",
            postalZip: "412714",
            region: "South Jeolla",
            value: 15
          },
          {
            name: "Sigourney Harmon",
            phone: "1-212-439-1575",
            address: "9441 Dolor Av.",
            postalZip: "108787",
            region: "Querétaro",
            value: 96
          }
        ],
        footerData: [],
        totalValue: ""
      };
    },
    methods: {
      footerSelection() {
        if (this.$route.params.footer == 'default') {
          this.footerData.push({
            rowKey: 0,
            name: "Default Footer",
          })
        } else if (this.$route.params.footer == 'totalize') {
          for (let data of this.tableData) {
            this.totalValue = Number(this.totalValue) + data.value;
          }
          this.footerData.push({
            rowKey: 0,
            name: "Total Value",
            value: this.totalValue
          });
        } else if (this.$route.params.footer == 'none') {
          this.footerData = []
        }
      },
      pageNumberChange(pageIndex) {
        this.pageIndex = pageIndex;
      },
      pageSizeChange(pageSize) {
        this.pageIndex = 1;
        this.pageSize = pageSize;
      }
    },
    computed: {
      tableFormat() {
        const { pageIndex, pageSize, tableData } = this;
        return tableData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
      },
      totalCount() {
        const { tableData } = this;
        return tableData.length;
      }
    },
    created() {
      this.$watch(
      () => this.$route.params,
      (toParams) => {
        console.log(toParams)
        this.$router.push(`/${toParams.footer}`)
      }
    )
      this.footerSelection();
    }
  };
</script>
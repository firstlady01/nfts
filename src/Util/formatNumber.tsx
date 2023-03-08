export const FormatNumber = (figure: any) => {
    return figure.replace(/\d(?=(\d{3}))/, '$&,'); 
}
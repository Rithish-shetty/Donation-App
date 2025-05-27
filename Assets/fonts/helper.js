export const getFontFamily = (Base = 'Inter', Weight) => {
    switch(Weight){
        case '100':
            return `${Base}_18pt-ExtraLight`;
        case '200':
            return `${Base}_28pt-Light`;
        case '300':
            return `${Base}_18pt-ExtraLight`;
        case '400':
        case 'normal':
            return `${Base}_24pt-Regular`;
        case '500':
            return `${Base}_24pt-Medium`;
        case '600':
            return `${Base}_24pt-SemiBold`;
        case '700':
            return `${Base}_24pt-Bold`;
        case '800':
            return `${Base}_28pt-ExtraBold`;
        case '900':
            return `${Base}_24pt-Black`;
        default:
            return `${Base}_24pt-Regular`;
    }
};

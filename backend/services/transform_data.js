async function transformData(basicData, entities) {
    const transformedData = { ...basicData };
    delete transformedData['Опис'];
    delete transformedData['Фотографія'];

    if (entities.length === 0) return transformedData;

    entities.forEach((element) => {
        for (const property in transformedData) {
            if (element[1].includes(property + ':')) {
                const value = element[1].split(':')[1].trim();
                transformedData[property] = value;
                console.log(true);
            }
        }
    });

    return transformedData;
}

module.exports.transformDataFromModel = transformData;

import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
    cloud_name: 'du7uyhauv',
    api_key: '823815767696846',
    api_secret: 'ilUI_TN4ExQebEZ1TYNa08FsjM0',
    secure: true,
});

/* eslint-disable no-undef */
describe('Pruebas en fileUpload', () => {
    test('debe de subir el archivo correctamente a cloudinary', async () => {
        const imageUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatzi.com%2Fclases%2F1098-ingenieria%2F6572-como-funciona-el-formato-jpg%2F&psig=AOvVaw3dHI4OolowfvF2veUyIjcH&ust=1707514651119000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMDp8vPZnIQDFQAAAAAdAAAAABAO";
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], "image-test.jpg");

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        await cloudinary.api.delete_resources('journal/' + [imageId], {
            resource_type: 'image'
        });

    });

    test('debe de retornal null', async () => {
        const file = new File([], "image-test.jpg");

        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});

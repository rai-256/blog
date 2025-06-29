const API_BASE_URL = 'http://localhost:3001/contents/';

// export const addContents = (name, title, description, image) => {
//   fetch(API_BASE_URL + 'memo', {
//     method: 'POST',
//     mode: 'cors',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: name,
//       title: title,
//       description: description,
//       image: image
//     })
//   })
//     .then(response => {
//       return true, response.json();
//     })
//     .then(data => {})
//     .catch(error => {
//       return false, error;
//     });
// };

// export const addPostContents = (name, title, description, image) => {
//   fetch(API_BASE_URL + 'post', {
//     method: 'POST',
//     mode: 'cors',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: name,
//       title: title,
//       description: description,
//       image: image
//     })
//   })
//     .then(response => {
//       return true, response.json();
//     })
//     .then(data => {})
//     .catch(error => {
//       return false, error;
//     });
// };
export const getImageNames = async () => {
  try {
    const res = await fetch(API_BASE_URL + 'imageName', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res);
  } catch (error) {
    return error;
  }
};

export const getNames = async () => {
  try {
    const res = await fetch(API_BASE_URL + 'name', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};
export const getContentsByType = async type => {
  try {
    const res = await fetch(API_BASE_URL + 'type/' + type, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};
export const getContents = async () => {
  try {
    const res = await fetch(API_BASE_URL, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res);
    return res.json();
  } catch (error) {
    return error;
  }
};

export const addContents = async (name, title, description, image) => {
  let base64Image = '';
  let imageName = '';
  if (image.length != 0) {
    imageName = image[0].name;
    base64Image = await convertImageToBase64(image[0]);
  }
  try {
    const res = await fetch(API_BASE_URL, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        title: title,
        description: description,
        base64Image: base64Image,
        imageName: imageName
      })
    });

    if (!res.ok) {
      return generateErrorMessage(res);
    }
    return 'contentsを追加しました。';
  } catch (error) {
    return 'クライアントサイドで問題が発生しました。\n' + error;
  }
};

export const updateContents = async (
  id,
  name,
  title,
  description,
  image,
  type_id
) => {
  let base64Image = '';
  let imageName = '';
  if (image.length != 0) {
    console.log(image[0]);
    imageName = image[0].name;
    base64Image = await convertImageToBase64(image[0]);
    console.log(base64Image);
  }
  try {
    const res = await fetch(API_BASE_URL, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        name: name,
        title: title,
        description: description,
        base64Image: base64Image,
        imageName: imageName,
        type_id: type_id
      })
    });

    if (!res.ok) {
      return generateErrorMessage(res);
    }
    return 'contentsを更新しました。';
  } catch (error) {
    return 'クライアントサイドで問題が発生しました。\n' + error;
  }
};

const generateErrorMessage = res => {
  let errorMessage = '';
  if (res.error != undefined) {
    errorMessage = res.error.message;
  } else {
    errorMessage = res.status + ':' + res.statusText;
  }

  console.log(errorMessage);
  return errorMessage;
};
const convertImageToBase64 = image => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // ファイル読み込みが成功した場合
    reader.onload = () => {
      resolve(reader.result); // Base64データを返す
    };

    // ファイル読み込みが失敗した場合
    reader.onerror = error => {
      reject('画像の読み込みに失敗しました: ' + error);
    };

    // 画像ファイルをBase64に変換
    reader.readAsDataURL(image);
  });
};
/**
 * 
 *     id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_name VARCHAR(255),
    update_at DATETIME NOT NULL,
    create_at DATETIME NOT NULL,
    is_public TINYINT (1) NOT NULL,
    type_id INT NOT NULL,
 
    



    export const getTypePostId = async () => {
      try {
        const response = await fetch(API_BASE_URL + 'post', {
          method: 'GET',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await (true, response.json());
    
        return data[0].id;
      } catch (error) {
        return false, error;
      }
    };
    
 */

const API_BASE_URL = 'http://localhost:3001/Memo/';

// fetch("http://localhost:3001/getContentsList", {
//     method: "POST",
//     mode: "cors",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       type:content_type
//     })
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {setContents(data.data)
//         console.log(data.data[0].title);
//     })
//     .catch(error => {
//       console.error("Error:", error);
//     });
async function handleResponse(response) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error || `HTTP error! status: ${response.status}`
    );
  }
  return response.json();
}
export const UploadMemo = (filename, title, contents) => {
  fetch(API_BASE_URL + 'setMemo', {
    method: 'Post',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      filename: filename,
      title: title,
      contents: contents
    })
  })
    .then(response => {
      return true, response.json();
    })
    .then(data => {})
    .catch(error => {
      return false, error;
    });
};
export async function GetAllMemo() {
  console.log('GetAllMemo');
  const memos = await fetch(API_BASE_URL + 'getAllMemo', {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      return false, error;
    });
  console.log(memos);
  return memos;
}

export async function MemoCount() {
  const count = await fetch(API_BASE_URL + 'Count', {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      //return true, response.json();
      return response.json();
    })
    .then(data => {
      console.log(data.count);
      return true, data.count;
    })
    .catch(error => {
      return false, error;
    });
  return count;
}
export async function GetMemo(name) {
  const memo = await fetch(API_BASE_URL + 'getMemo/' + name, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return true, response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      return false, error;
    });
  console.log(memo);
  return memo;
}
export const GetMemoPage = (page, pageSize, sortBy, sortOrder) => {
  fetch(API_BASE_URL + 'getMemoPage', {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      page: page,
      pageSize: pageSize,
      sortBy: sortBy,
      sortOrder: sortOrder
    })
  })
    .then(response => {
      return true, response.json();
    })
    .then(data => {})
    .catch(error => {
      return false, error;
    });
};

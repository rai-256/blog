import { useState } from 'react';
import * as contents from 'app/api-client/contents';

export function useContentsManager() {
  const [statusMessage, setStatusMessage] = useState('');

  const handleSave = async ({ id, name, title, description, image }) => {
    let message;
    if (id) {
      message = await contents.updateContents(
        id,
        name,
        title,
        description,
        image
      );
    } else {
      message = await contents.addContents(name, title, description, image);
    }
    setStatusMessage(message);
    return message;
  };

  return {
    statusMessage,
    handleSave
  };
}

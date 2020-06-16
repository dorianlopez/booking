

function htmlEmailCodeAccess(title,title_color,text,footer){
  let html = `
  <table style="background-color: #E6E6E6; width: 100%;">
  <tbody>
    <tr>
      <td style="padding: 20px;">
        <center>
          <table style="width: 600px;" width="600px" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td style="width: 100%; vertical-align: top; padding:0; background-color: #FFFFFF; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; border-color: #FFFFFF; border-style: none; border-width: 0px;">
                  <table style="table-layout: fixed; width:100%; border-spacing: 0px;" width="100%" cellpadding="0">
                    <tbody></tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="width: 100%; vertical-align: top; padding:0; background-color: #FFFFFF; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; border-color: #FFFFFF; border-style: none; border-width: 0px;">
                  <table style="table-layout: fixed; width:100%; border-spacing: 0px;" width="100%" cellpadding="0">
                    <tbody>
                      <tr>
                        <td style="padding-left: 0px; padding-right: 0px;">
                          <table style="border-color: #FFFFFF; border-style: none; border-width: 0px; background-color: transparent; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; margin-top: 0px; margin-bottom: 0px; width:100%; border-spacing: 0px" cellpadding="0" width="100%">
                            <tbody>
                              <tr>
                                <td style="width: 100%; padding-left: 0px; padding-right: 0px;" width="100%">
                                  <table style="border-color: #FFFFFF; border-style: none; border-width: 0px; background-color: transparent; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; margin-top: 0px; margin-bottom: 0px; width: 100%;" cellpadding="0" width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="word-break: break-word; padding: 15px 15px; font-family: Helvetica, Arial, sans-serif;">
                                          <p></p>
                                          <h2>
                                            <span data-redactor="verified" data-redactor-inlinemethods="" style="color: ${title_color}; font-family: Trebuchet MS, sans-serif;">
                                              ${title}
                                            </span>
                                          </h2>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="width: 100%; vertical-align: top; padding:0; background-color: #FFFFFF; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; border-color: #FFFFFF; border-style: none; border-width: 0px;">
                  <table style="table-layout: fixed; width:100%; border-spacing: 0px;" width="100%" cellpadding="0">
                    <tbody>
                      <tr>
                        <td style="padding-left: 0px; padding-right: 0px;">
                          <table style="border-color: #FFFFFF; border-style: none; border-width: 0px; background-color: transparent; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; margin-top: 0px; margin-bottom: 0px; width:100%; border-spacing: 0px" cellpadding="0" width="100%">
                            <tbody>
                              <tr>
                                <td style="width: 100%; padding-left: 0px; padding-right: 0px;" width="100%">
                                  <table style="border-color: #FFFFFF; border-style: none; border-width: 0px; background-color: transparent; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; margin-top: 0px; margin-bottom: 0px; width: 100%;" cellpadding="0" width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="word-break: break-word; padding: 15px 15px; font-family: Helvetica, Arial, sans-serif;">
                                          <p></p>
                                          <p>
                                            <span data-redactor="verified" data-redactor-inlinemethods="" style="font-family: Trebuchet MS, sans-serif;">
                                              ${text}
                                            </span>
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-left: 0px; padding-right: 0px;">
                          <table style="border-color: #FFFFFF; border-style: none; border-width: 0px; background-color: transparent; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; margin-top: 0px; margin-bottom: 0px; width:100%; border-spacing: 0px" cellpadding="0" width="100%">
                            <tbody>
                              <tr>
                                <td style="width: 100%; padding-left: 0px; padding-right: 0px;" width="100%">
                                  <table style="border-color: #FFFFFF; border-style: none; border-width: 0px; background-color: transparent; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; margin-top: 0px; margin-bottom: 0px; width: 100%;" cellpadding="0" width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="word-break: break-word; padding: 15px 15px; font-family: Helvetica, Arial, sans-serif;">
                
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-left: 0px; padding-right: 0px;"><table style="border-color: #FFFFFF; border-style: none; border-width: 0px; background-color: transparent; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; margin-top: 0px; margin-bottom: 0px; width:100%; border-spacing: 0px" cellpadding="0" width="100%">
                          <tbody>
                            <tr>
                              <td style="width: 100%; padding-left: 0px; padding-right: 0px;" width="100%">
                                <table style="border-color: #FFFFFF; border-style: none; border-width: 0px; background-color: transparent; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; margin-top: 0px; margin-bottom: 0px; width: 100%;" cellpadding="0" width="100%">
                                  <tbody>
                                    <tr>
                                      <td style="word-break: break-word; padding: 15px 15px; font-family: Helvetica, Arial, sans-serif;">
                                        <p></p>
                                        <p>
                                          <span data-redactor="verified" data-redactor-inlinemethods="" style="font-family: Trebuchet MS, sans-serif;">
                                             ${footer}
                                          </span>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                      <tr>
                        <td style="padding-left: 0px; padding-right: 0px;">
                          <table style="border-color: #FFFFFF; border-style: none; border-width: 0px; background-color: transparent; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; margin-top: 0px; margin-bottom: 0px; width:100%; border-spacing: 0px" cellpadding="0" width="100%">
                            <tbody>
                              <tr>
                                <td style="width: 100%; padding-left: 0px; padding-right: 0px;" width="100%">
                                  <table style="border-color: #FFFFFF; border-style: none; border-width: 0px; background-color: transparent; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; margin-top: 0px; margin-bottom: 0px; width: 100%;" cellpadding="0" width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="word-break: break-word; padding: 15px 15px; font-family: Helvetica, Arial, sans-serif;">
                                          <p></p>
                                          <p style="text-align: center;">
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="width: 100%; vertical-align: top; padding:0; background-color: #FFFFFF; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; border-color: #FFFFFF; border-style: none; border-width: 0px;">
                  <table style="table-layout: fixed; width:100%; border-spacing: 0px;" width="100%" cellpadding="0">
                    <tbody></tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </td>
    </tr>
  </tbody>
</table>
             `;
   return html;
}

module.exports = {
  htmlEmailCodeAccess
}
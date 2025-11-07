"use client";

import {
  SelectContainer,
  SelectInput,
  SelectInput2,
  SettingsContainer,
  SettingsContainerPart1,
  SettingsContainerPart2,
  SettingsContainerPart3,
  SettingsContent,
  SettingsPart1,
  SettingsPart2,
  ThemeContainer,
  ThemeContent,
  ThemeInput,
  ThemeInput2,
} from "./Settings.styled";
import Menu from "@/components/menu/Menu";

function page() {
  return (
    <SettingsContainer>
      <Menu />
      <SettingsContent>
        <SettingsContainerPart1>
          <h1>Configurações</h1>
        </SettingsContainerPart1>

        <SettingsContainerPart2>

          <SettingsPart1>
            <ThemeContainer>
              <h2><strong>Tema</strong></h2>
              <ThemeContent>
                <ThemeInput>
                  
                  <input type="radio" />
                  <label>Claro</label>
                </ThemeInput>
                <ThemeInput2>
              
                  <input type="radio" />
                      <label>Escuro</label>
                </ThemeInput2>
          
              </ThemeContent>
            </ThemeContainer>
                <SelectContainer>
                  <h2><strong>Tempo</strong></h2>
                    <SelectInput>
                      <p>Formato de hora</p>
                      <select>
                        <option>24 horas</option>
                      </select>
                    </SelectInput>
                    <SelectInput2>
                      <p>Formato de data</p>
                      <select>
                        <option>DD/MM/YYYY</option>
                      </select>
                    </SelectInput2>
                </SelectContainer>
          </SettingsPart1>

          <SettingsPart2>
              <div>
                <h2>Idioma</h2>
                <select>
                  <option>
                    Português
                  </option>
                </select>
              </div>
              <div>
                     <h2>Feedback</h2>
               <select>
                  <option>
                    Enviar Sugestão
                  </option>
                </select>
              </div>
          </SettingsPart2>

        </SettingsContainerPart2>
        <SettingsContainerPart3>
          <textarea placeholder="Relate o problema ou sugestão..."></textarea>
          <button>Enviar</button>
          </SettingsContainerPart3>
      </SettingsContent>
    </SettingsContainer>
  );
}

export default page;

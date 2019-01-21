<template>
  <div class="editForm">
    <div class="submit-button">
      <el-button v-loading="loading" :disabled="loading" type="primary" size="mini" @click="submitClick">保存</el-button>
    </div>
    <el-row :gutter="20" class="editForm-box">
      <el-col class="edit-control">
        <el-tabs v-model="activeName">
          <el-tab-pane label="控件库" name="first" id="first">
            <draggable v-model="kjList" :options="{group:{ name:'people',  pull:'clone', put:false,ghostClass:'.Input',filter: '.Input'}, sort:false}" @end="moved">
              <div class="wf-widgetsitem" v-for="(element,index) in kjList" :key="index">
                <label>{{element.props.label}}</label>
                <i class="fa fa-edit"></i>
              </div>
            </draggable>
          </el-tab-pane>    
          <el-tab-pane label="出勤套件" name="second" id="second">
            <draggable v-model="cqList" :options="{group:{ name:'people',  pull:'clone', put:false}, sort:false}" @end="moved">
              <div class="wf-widgetsitem" :class="{disabled: disabled}" v-for="(element,index) in cqList" :key="index">
                <label>{{element.props.label}}</label>
                <i class="fa fa-edit"></i>
              </div>
            </draggable>
            <div v-if="disabled" class="nodrag"></div>
          </el-tab-pane>
          <el-tab-pane label="人事套件" name="third" id="third">
            <draggable v-model="rsList" :options="{group:{ name:'people',  pull:'clone', put:false}, sort:false}" @end="moved">
              <div class="wf-widgetsitem" :class="{disabled: disabled}" v-for="(element,index) in rsList" :key="index">
                <label>{{element.props.label}}</label>
                <i class="fa fa-edit"></i>
              </div>
            </draggable>
            <div v-if="disabled" class="nodrag"></div>
          </el-tab-pane>
          <el-tab-pane label="行政套件" name="four" id="four">
            <draggable v-model="xzList" :options="{group:{ name:'people',  pull:'clone', put:false}, sort:false}" @end="moved">
              <div class="wf-widgetsitem" :class="{disabled: disabled}" v-for="(element,index) in xzList" :key="index">
                <label>{{element.props.label}}</label>
                <i class="fa fa-edit"></i>
              </div>
            </draggable>
            <div v-if="disabled" class="nodrag"></div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      
      <el-col class="wf-formcanvas">       
        <div style="margin-top:75px; margin-left:26px;width:325px;height:545px;overflow-y:auto;overflow-x:hidden;"> 
          <draggable @change="change(fatherList)" :list="fatherList" :options="{group: 'people',scroll: true}" style="height:99%;">
            <div class="wf-component" :class="{hover: Index==index, clickStyle: clickIndex==index }" v-for="(element,index) in fatherList" :key="index" @mouseover="hoverClick(index)" @mouseout="mouseOut" @click="formItemClick(element, index)">
              <div v-if="element.componentName === 'DetailField'">
                <div class="InputDetail-box"> 
                  <div class="InputDetail-label clearfix"><span class="f-left">{{element.props.label}}</span></div>
                  <section class="InputDetail-content">
                    <draggable id="children" @change="childChange(element.children, index)" v-model="element.children" :options="{group:'people',scroll: true}" style="height:100%;">
                      <div class="wf-component" :class="{hover: childIndex==i, clickStyle: childClickIndex==i}" v-for="(item, i) in element.children" :key="i" @mouseover.stop="childHoverClick(i)" @mouseout.stop="childMouseOut" @click.stop="formChildItemClick(item,i,index)">
                        <div v-if="item.componentName !== 'DetailField'">
                          <div v-if="item.componentName === 'CalenderRangeField'">
                            <div class="dateTimes-box">
                              <div class="Input clearfix"><span class="f-left label">{{item.props.startTimeLabel}}</span><span class="f-right tsMsg">{{item.props.placeholder}}{{item.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                              <div class="Input clearfix"><span class="f-left label">{{item.props.endTimeLabel}}</span><span class="f-right tsMsg">{{item.props.placeholder}}{{item.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                              <div class="Input clearfix"><span class="f-left label">{{item.props.durationLabel}}</span><span class="f-right tsMsg">{{item.props.placeholder}}<i class="fa fa-angle-right ml10"></i></span></div>
                              <div class="Input-close" @click.stop="removeChildClick(element.children, i,item.props.id)" v-if="childIndex==i">
                                <i class="fa fa-remove"></i>
                              </div>
                            </div>
                          </div>    
                          <div v-else-if="item.componentName === 'MoneyField'">
                            <div>
                              <div class="Input clearfix"><span class="f-left label">{{item.props.label}}(元)</span><span class="f-right tsMsg">{{item.props.placeholder}}{{item.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                              <div style="color:#666;padding: 4px 10px;">大写: 壹万元整（示例）</div>
                              <div class="Input-close" @click.stop="removeChildClick(element.children, i,item.props.id)" v-if="childIndex==i">
                                <i class="fa fa-remove"></i>
                              </div>
                            </div>
                          </div> 
                          <div v-else-if="item.componentName === 'NumericField'">
                            <div class="Input clearfix"><span class="f-left label">{{item.props.label}}<span v-if="item.props.unit">({{item.props.unit}})</span></span><span class="f-right tsMsg">{{item.props.placeholder}}<i class="fa fa-angle-right ml10"></i></span></div>
                            <div class="Input-close" @click.stop="removeChildClick(element.children, i,item.props.id)" v-if="childIndex==i">
                              <i class="fa fa-remove"></i>
                            </div>
                          </div>    
                          <div v-else>
                            <div class="Input clearfix"><span class="f-left label">{{item.props.label}}</span><span class="f-right tsMsg">{{item.props.placeholder}}{{item.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                            <div class="Input-close" @click.stop="removeChildClick(element.children, i,item.props.id)" v-if="childIndex==i">
                              <i class="fa fa-remove"></i>
                            </div>
                          </div>       
                        </div>
                      </div>
                      <div v-if="element.children.length==0" style="line-height:90px;color:#ccc;">可拖入多个组件（不包含明细组件）</div>
                    </draggable>
                  </section>
                  <div class="addLabel clearfix"><span class="f-left"><i class="fa fa-plus mr10"></i>{{element.props.addLabel}}</span></div>
                </div>
                <div class="Input-close" @click.stop="removeClick(index,element.props.id)" v-if="Index==index">
                  <i class="fa fa-remove"></i>
                </div>
              </div>
              <div v-else-if="element.componentName === 'CalenderRangeField'">
                <div class="dateTimes-box">
                  <div class="Input clearfix"><span class="f-left label">{{element.props.startTimeLabel}}</span><span class="f-right tsMsg">请选择{{element.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                  <div class="Input clearfix"><span class="f-left label">{{element.props.endTimeLabel}}</span><span class="f-right tsMsg">请选择{{element.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                  <div class="Input clearfix"><span class="f-left label">{{element.props.durationLabel}}</span><span class="f-right tsMsg"><i class="fa fa-angle-right ml10"></i></span></div>                 
                  <div class="Input-close" @click.stop="removeClick(index,element.props.id)" v-if="Index==index">
                    <i class="fa fa-remove"></i>
                  </div>
                </div>
              </div>    
              <div v-else-if="element.componentName === 'MoneyField'">
                <div>
                  <div class="Input clearfix"><span class="f-left label">{{element.props.label}}(元)</span><span class="f-right tsMsg">{{element.props.placeholder}}{{element.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                  <div style="color:#666;padding: 4px 10px;">大写: 壹万元整（示例）</div>
                  <div class="Input-close" @click.stop="removeClick(index,element.props.id)" v-if="Index==index">
                    <i class="fa fa-remove"></i>
                  </div>
                </div>
              </div>  
              
              <!--套件数据  -->
              <div v-else-if="element.props.suite == 'suite'">
                <div class="taoJian-box">
                  <div v-for="(item, i) in element.children" :key="i">
                    <div v-if="item.componentName == 'DetailField'">
                      <div class="InputDetail-box"> 
                        <div class="InputDetail-label clearfix"><span class="f-left">{{item.props.label}}</span></div>
                        <section class="InputDetail-content">
                            <div class="wf-component" v-for="(child, c) in item.children" :key="c">
                              <!-- <div v-if="child.componentName !== 'DetailField'"> -->
                                <div v-if="child.componentName === 'CalenderRangeField'">
                                  <div class="dateTimes-box">
                                    <div class="Input clearfix"><span class="f-left label">{{child.props.startTimeLabel}}</span><span class="f-right tsMsg">{{child.props.placeholder}}{{child.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                                    <div class="Input clearfix"><span class="f-left label">{{child.props.endTimeLabel}}</span><span class="f-right tsMsg">{{child.props.placeholder}}{{child.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                                    <div class="Input clearfix"><span class="f-left label">{{child.props.durationLabel}}</span><span class="f-right tsMsg">{{child.props.placeholder}}<i class="fa fa-angle-right ml10"></i></span></div>
                                    <div class="Input-close" @click.stop="removeChildClick(element.children, i,item.props.id)" v-if="childIndex==i">
                                      <i class="fa fa-remove"></i>
                                    </div>
                                  </div>
                                </div>    
                                <div v-else-if="child.componentName === 'MoneyField'">
                                  <div>
                                    <div class="Input clearfix"><span class="f-left label">{{child.props.label}}(元)</span><span class="f-right tsMsg">{{child.props.placeholder}}{{child.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                                    <div style="color:#666;padding: 4px 10px;">大写: 壹万元整（示例）</div>
                                  </div>
                                </div>  
                                <div v-else-if="child.componentName === 'NumericField'">
                                  <div class="Input clearfix"><span class="f-left label">{{child.props.label}}<span v-if="child.props.unit">({{child.props.unit}})</span></span><span class="f-right tsMsg">{{child.props.placeholder}}<i class="fa fa-angle-right ml10"></i></span></div>    
                                </div>      
                                <div v-else>
                                  <div class="Input clearfix"><span class="f-left label">{{child.props.label}}</span><span class="f-right tsMsg">{{child.props.placeholder}}{{child.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                                </div>       
                              <!-- </div> -->
                            </div>
                        </section>
                        <div class="addLabel clearfix"><span class="f-left text-center" style="width:100%;"><i class="fa fa-plus mr10"></i>{{item.props.addLabel}}</span></div>
                      </div>
                    </div>  
                    <div v-else-if="item.componentName === 'CalenderRangeField'">
                      <div class="dateTimes-box">
                        <div class="Input clearfix"><span class="f-left label">{{item.props.startTimeLabel}}</span><span class="f-right tsMsg">{{item.props.placeholder}}{{item.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                        <div class="Input clearfix"><span class="f-left label">{{item.props.endTimeLabel}}</span><span class="f-right tsMsg">{{item.props.placeholder}}{{item.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                        <div class="Input clearfix"><span class="f-left label">{{item.props.durationLabel}}</span><span class="f-right tsMsg">{{item.props.placeholder}}<i class="fa fa-angle-right ml10"></i></span></div>
                        <div class="Input-close" @click.stop="removeChildClick(element.children, i,item.props.id)" v-if="childIndex==i">
                          <i class="fa fa-remove"></i>
                        </div>
                      </div>
                    </div>    
                    <div v-else-if="item.componentName === 'MoneyField'">
                      <div>
                        <div class="Input clearfix"><span class="f-left label">{{item.props.label}}(元)</span><span class="f-right tsMsg">{{item.props.placeholder}}{{item.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                        <div style="color:#666;padding: 4px 10px;">大写: 壹万元整（示例）</div>
                        <div class="Input-close" @click.stop="removeChildClick(element.children, i, item.props.id)" v-if="childIndex==i">
                          <i class="fa fa-remove"></i>
                        </div>
                      </div>
                    </div> 
                    <div v-else-if="item.componentName === 'NumericField'">
                      <div class="Input clearfix"><span class="f-left label">{{item.props.label}}<span v-if="item.props.unit">({{item.props.unit}})</span></span><span class="f-right tsMsg">{{item.props.placeholder}}<i class="fa fa-angle-right ml10"></i></span></div>
                      <div class="Input-close" @click.stop="removeChildClick(element.children, i, item.props.id)" v-if="childIndex==i">
                        <i class="fa fa-remove"></i>
                      </div>
                    </div>
                    <div v-else>
                      <div class="Input clearfix"><span class="f-left label">{{item.props.label}}</span><span class="f-right tsMsg">{{item.props.placeholder}}<i class="fa fa-angle-right ml10"></i></span></div>
                      <div class="Input-close" @click.stop="removeChildClick(element.children, i, item.props.id)" v-if="childIndex==i">
                        <i class="fa fa-remove"></i>
                      </div>
                    </div>          
                  </div>
                  <div class="Input-close" @click.stop="removeClick(index,element.props.id)" v-if="Index==index">
                    <i class="fa fa-remove"></i>
                  </div>
                </div>
              </div> 
              <div v-else-if="element.componentName === 'NumericField'">
                <div class="Input clearfix"><span class="f-left label">{{element.props.label}}<span v-if="element.props.unit">({{element.props.unit}})</span></span><span class="f-right tsMsg">{{element.props.placeholder}}<i class="fa fa-angle-right ml10"></i></span></div>
                <div class="Input-close" @click.stop="removeClick(index,element.props.id)" v-if="Index==index">
                  <i class="fa fa-remove"></i>
                </div>
              </div>   
              <div v-else>
                <div class="Input clearfix"><span class="f-left label">{{element.props.label}}</span><span class="f-right tsMsg">{{element.props.placeholder}}{{element.props.required ? '(必填)' : ''}}<i class="fa fa-angle-right ml10"></i></span></div>
                <div class="Input-close" @click.stop="removeClick(index,element.props.id)" v-if="Index==index">
                  <i class="fa fa-remove"></i>
                </div>
              </div>    
            </div>
          </draggable>
        </div>
      </el-col>
      <el-col class="wf-settingpanel">
        <el-tabs v-model="activeFormName">
          <el-tab-pane label="控件设置" name="first">
            <div class="formSet-item" v-if="editForm.componentName=='TextField' || editForm.componentName=='TextareaField' || editForm.componentName=='NumericField' || editForm.componentName=='RadioField'  || editForm.componentName=='CheckboxField' || editForm.componentName=='MoneyField' || editForm.componentName=='DetailField' || editForm.componentName=='DepartmentField' || editForm.componentName=='ContactsField'">
              <label>标题 <span>最多20字</span></label>
              <input :class="{onFocus: onFocus==1}" @focus="focus(1)" @blur="blur()" type="text" v-model="editForm.label" />
            </div>
            <div class="formSet-item" v-if="editForm.componentName=='DescriptionField'">
              <label>说明文字 <span>最多5000字</span></label>
              <textarea :class="{onFocus: onFocus==11}" @focus="focus(11)" @blur="blur()" v-model="editForm.content" ></textarea>
            </div>
            <div class="formSet-item" v-if="editForm.componentName=='DetailField'">
              <label>动作名称 <span>最多20字</span></label>
              <textarea :class="{onFocus: onFocus==12}" @focus="focus(12)" @blur="blur()" v-model="editForm.addLabel" ></textarea>
            </div>
            <!-- <div class="formSet-item" v-if="editForm.componentName=='DescriptionField'">
              <label>是否在审批页显示</label>
              <div class="clearfix"><input type="checkbox" v-model="editForm.auditVisible" class="f-left" /><span class="f-left">显示</span></div>
            </div> -->
            <div v-if="editForm.componentName=='CalenderRangeField'">
              <div class="formSet-item">
                <label>标题1 <span>最多20字</span></label>
                <input :class="{onFocus: onFocus==8}" @focus="focus(8)" @blur="blur()" type="text" v-model="editForm.startTimeLabel" />
              </div>
              <div class="formSet-item">
                <label>标题2 <span>最多20字</span></label>
                <input :class="{onFocus: onFocus==9}" @focus="focus(9)" @blur="blur()" type="text" v-model="editForm.endTimeLabel" />
              </div>
            </div>
            <div class="formSet-item" v-if="editForm.componentName=='TextField' || editForm.componentName=='TextareaField' || editForm.componentName=='NumericField' || editForm.componentName=='RadioField'  || editForm.componentName=='CheckboxField' || editForm.componentName=='MoneyField' || editForm.componentName=='CheckboxField' || editForm.componentName=='CheckboxField'">
              <label>提示文字 <span>最多50字</span></label>
              <input :class="{onFocus: onFocus==2}" @focus="focus(2)" @blur="blur()" type="text" v-model="editForm.placeholder" />
            </div>
            <div v-if="editForm.componentName=='CalenderRangeField'">
              <div class="formSet-item">
                <label>自动计算时长</label>
                <div class="clearfix"><input type="checkbox" v-model="editForm.autoCalcInterval" class="f-left" /><span class="f-left">开启</span></div>
              </div>
              <div class="formSet-item ml20" v-if="editForm.autoCalcInterval" style="padding-top:5px;">
                <label>标题 <span>最多20字</span></label>
                <input :class="{onFocus: onFocus==10}" @focus="focus(10)" @blur="blur()" type="text" v-model="editForm.durationLabel" />
              </div>
            </div>
            <div class="formSet-item" v-if="editForm.componentName=='NumericField'">
              <label>单位</label>
              <input :class="{onFocus: onFocus==3}" @focus="focus(3)" @blur="blur()" type="text" v-model="editForm.unit" />
            </div>
            <div class="formSet-item" v-if="editForm.componentName=='AptitudeSuite' || editForm.componentName=='SealUseSuite' || editForm.componentName=='PaymentSuite' || editForm.componentName=='CostSuite' || editForm.componentName=='TrainPlanSuite' || editForm.componentName=='RecruitmentPlanSuite' || editForm.componentName=='OvertimeSuite' || editForm.componentName=='RadioField' || editForm.componentName=='CheckboxField' || editForm.componentName=='SelectField'">
              <label>{{labelTitle}}</label>
              <div>
                <div class="check-radio" v-for="(item, index) in editForm.options" :key="index">
                  <input :class="{onFocus: onFocus==4+index}" @focus="focus(4+index)" @blur="blur()" type="text" v-model="editForm.options[index]" style="width:180px;" />
                  <i class="fa fa-minus-circle" @click="checkRadioRemove(index)" v-if="editForm.options.length>1"></i>
                  <i class="fa fa-plus-square" @click="checkRadioAdd"></i>
                </div>
              </div>
            </div>
            
            <div class="formSet-item" v-if="editForm.componentName=='CalenderField' || editForm.componentName=='CalenderRangeField'">
              <label>日期类型</label>
              <div>
                <div class="check-radio">
                  <el-radio-group v-model="editForm.format">
                    <el-radio label="yyyy/MM/dd HH:mm" style="color:#fff;">年-月-日 时:分</el-radio><br/>
                    <el-radio label="yyyy/MM/dd" style="color:#fff;">年-月-日</el-radio>
                  </el-radio-group>
                </div>
              </div>
            </div>
            <div class="formSet-item" v-if="editForm.componentName=='DepartmentField' || editForm.componentName=='ContactsField'">
              <label>选项</label>
              <div>
                <div class="check-radio" v-if="editForm.componentName=='DepartmentField'">
                  <el-radio-group v-model="editForm.multiple">
                    <el-radio :label="false" style="color:#fff;">只能选择一个部门</el-radio><br/>
                    <el-radio :label="true" style="color:#fff;">可同时选择多个部门</el-radio>
                  </el-radio-group>
                </div>
                <div class="check-radio" v-if="editForm.componentName=='ContactsField'">
                  <el-radio-group v-model="editForm.multiple">
                    <el-radio :label="false" style="color:#fff;">只能选择一人</el-radio><br/>
                    <el-radio :label="true" style="color:#fff;">可同时选择多人</el-radio>
                  </el-radio-group>
                </div>
              </div>
            </div>
            <div class="formSet-item" v-if="editForm.componentName!='DescriptionField' && editForm.componentName!='ContractSuite' && editForm.componentName!='AptitudeSuite' && editForm.componentName!='SealUseSuite' && editForm.componentName!='PaymentSuite' && editForm.componentName!='CostSuite' && editForm.componentName!='CarSuite' && editForm.componentName!='MeetRoomSuite' && editForm.componentName!='OfficeSuppliesSuite' && editForm.componentName!='OnboardingSuite' && editForm.componentName!='DepartureSuite' && editForm.componentName!='BecomeAFullMemberSuite' && editForm.componentName!='TrainPlanSuite' && editForm.componentName!='RecruitmentPlanSuite' && editForm.componentName!='RecruitmentDemandSuite' && editForm.componentName!='LeaveSuite' && editForm.componentName!='GoOutSuite' && editForm.componentName!='OvertimeSuite' && editForm.componentName!='AttendanceSuite' && editForm.componentName!='BusinessTripSuite'">
              <label>验证</label>
              <div class="clearfix"><input type="checkbox" v-model="editForm.required" class="f-left" /><span class="f-left">(必填)</span></div>
            </div>
            <div class="formSet-item" v-if="editForm.componentName=='MoneyField'">
              <label>大写</label>
              <div class="clearfix"><input type="checkbox" v-model="editForm.showUpperCase" class="f-left" /><span class="f-left">显示大写<span style="font-size:12px;color:#f1f1f1;">（输入数字后自动显示大写）</span></span></div>
            </div>
            <!-- <div class="formSet-item">
              <label>打印</label>
              <div class="clearfix"><input type="checkbox" v-model="editForm.print" class="f-left" /><span class="f-left">参与打印<span style="font-size:12px;color:#f1f1f1;">（如不勾选，打印时不显示该项）</span></span></div>
            </div> -->
          </el-tab-pane>
          <el-tab-pane label="表单设置" name="second">
            <div class="formSet-item" >
              <label>审批名称 <span>最多50字</span></label>
              <input :class="{onFocus: onFocus==13}" @focus="focus(13)" @blur="blur()" type="text" v-model="shenPiEdit.name" />
            </div>
            <div class="formSet-item" >
              <label>审批说明 <span>最多100字</span></label>
              <textarea :class="{onFocus: onFocus==14}" @focus="focus(14)" @blur="blur()" v-model="shenPiEdit.description" ></textarea>
            </div>
            <!-- <div class="formSet-item" >
              <label>审批意见</label>
              <div class="clearfix"><input type="checkbox" v-model="shenPiEdit.commentRequired" class="f-left" /><span class="f-left">必填<span style="font-size:12px;color:#f1f1f1;">（如勾选，审批人必须填写意见才可提交审批结果）</span></span></div>
              <div class="clearfix"><input type="checkbox" v-model="shenPiEdit.commentStarterVisible" class="f-left" /><span class="f-left">对发起人不可见 <span style="font-size:12px;color:#f1f1f1;">（如勾选，评语仅审批人和管理员可见）</span></span></div>
            </div> -->
            <div class="formSet-item clearfix">
              <label class="f-left" style="margin-top:5px;">选择分组</label>
              <el-select class="ml10" v-model="shenPiEdit.categoryId"  placeholder="请选择">
                <el-option
                  v-for="item in groupOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
            <div class="formSet-item" >
              <label>图标</label>  
              <div class="iconBox clearfix">           
                <div class="icon-box" :class="{iconActive: selectIconIndex==index}" v-for="(item, index) in iconBox" :key="index" @click="iconClick(item,index)">
                  <div class="iconItem" :style="{'background':item.color}">
                    <div class="IconImg">
                      <i :class="'fa '+item.icon"></i>
                    </div>
                  </div>
                  <div class="selectIcon" v-if="selectIconIndex==index">
                    <i class="fa fa-check"></i>
                  </div>
                </div>
              </div> 
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>  
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div style="text-align:center;"><i class="fa fa-check-circle blue" style="margin-right: 10px;"></i>保存成功，该表单已启用！</div>
      <div style="width:80px;margin: 20px auto;">
        <router-link to="/formData"><el-button size="mini">查看表单</el-button></router-link>
        <!--<el-button type="primary" size="mini" @click="setProcessClick">流程设置</el-button>-->
      </div>
    </el-dialog>
    <div class="submit-button"><el-button v-loading="loading" type="primary" :disabled="false" size="mini" @click="submitClick">保存</el-button></div>
  </div>
</template>
<script type="text/javascript">
import draggable from 'vuedraggable'
import {kjList} from './list/kongjian'
import {cqList} from './list/cqTaoJian'
import {xzList} from './list/xzTaoJian'
import {rsList} from './list/rsTaoJian'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'editForm',
  components: {
    draggable
  },
  created () {
    // this.getGroup()
    this.getFormList()
    // this.initData()
  },
  data () {
    return {
      labelTitle: '选项',
      operateType: '',
      formTemplateId: 0,
      buttonDisabled: false,
      loading: false,
      activeName: 'first',
      activeFormName: 'second',
      isChildClick: false,
      disabled: false,
      dialogVisible: false,
      usedConditionField: [],
      Index: -1,
      childIndex: -1,
      clickIndex: -1,
      childClickIndex: -1,
      editFormIndex: -1,
      onFocus: -1,
      selectIconIndex: -1,
      modelId: '',
      groupOptions: [],
      // 图标数据
      iconBox: [
        {icon: 'fa-calendar-plus-o', color: '#00B2EE'},
        {icon: 'fa-commenting', color: '#EE7942'},
        {icon: 'fa-credit-card-alt', color: '#F4A460'},
        {icon: 'fa-cubes', color: '#3CB371'},
        {icon: 'fa-envelope-o', color: '#00B2EE'},
        {icon: 'fa-exclamation-triangle', color: '#F4A460'},
        {icon: 'fa-database', color: '#3CB371'},
        {icon: 'fa-gear', color: '#EE7942'},
        {icon: 'fa-heart', color: '#3CB371'},
        {icon: 'fa-life-ring', color: '#F4A460'},
        {icon: 'fa-lock', color: '#F4A460'},
        {icon: 'fa-pie-chart', color: '#00B2EE'},
        {icon: 'fa-tasks', color: '#F4A460'},
        {icon: 'fa-car', color: '#00B2EE'},
        {icon: 'fa-user', color: '#EE7942'},
        {icon: 'fa-file', color: '#00B2EE'},
        {icon: 'fa-id-card', color: '#F4A460'},
        {icon: 'fa-telegram', color: '#EE7942'},
        {icon: 'fa-bell', color: '#3CB371'},
        {icon: 'fa-building', color: '#00B2EE'},
        {icon: 'fa-coffee', color: '#00B2EE'},
        {icon: 'fa-flag', color: '#EE7942'},
        {icon: 'fa-globe', color: '#F4A460'},
        {icon: 'fa-print', color: '#3CB371'},
        {icon: 'fa-server', color: '#00B2EE'},
      ],
      shenPiEdit: {
        name: '',
        description: '',
        categoryId: '',
        icon: '',
        color: '',
        commentRequired: false,
        commentStarterVisible: false,
        contents: []
      },
      editForm: {},    
      kjList: kjList,
      cqList :cqList,
      xzList: xzList,
      rsList: rsList,
      fatherList:[],
      tjChild: []
    }
  },
  watch: {
    editForm: {  
　　　handler(newValue, oldValue) {  　　　
        if (this.isChildClick) {
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.label = newValue.label
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.placeholder = newValue.placeholder
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.unit = newValue.unit
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.multiple = newValue.multiple
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.startTimelabel = newValue.startTimelabel
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.endTimelabel = newValue.endTimelabel
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.durationLabel = newValue.durationLabel
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.format = newValue.format
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.options = newValue.options
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.autoCalcInterval = newValue.autoCalcInterval
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.content = newValue.content
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.auditVisible = newValue.auditVisible
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.showUpperCase = newValue.showUpperCase
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.type = newValue.type
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.addLabel = newValue.addLabel
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.required = newValue.required        
          this.fatherList[this.editFormIndex].children[this.childClickIndex].props.print = newValue.print
        } else {
          this.fatherList[this.editFormIndex].props.label = newValue.label
          this.fatherList[this.editFormIndex].props.placeholder = newValue.placeholder
          this.fatherList[this.editFormIndex].props.unit = newValue.unit
          this.fatherList[this.editFormIndex].props.multiple = newValue.multiple
          this.fatherList[this.editFormIndex].props.startTimeLabel = newValue.startTimeLabel
          this.fatherList[this.editFormIndex].props.endTimeLabel = newValue.endTimeLabel
          this.fatherList[this.editFormIndex].props.durationLabel = newValue.durationLabel
          this.fatherList[this.editFormIndex].props.format = newValue.format
          this.fatherList[this.editFormIndex].props.options = newValue.options
          this.fatherList[this.editFormIndex].props.autoCalcInterval = newValue.autoCalcInterval
          this.fatherList[this.editFormIndex].props.content = newValue.content
          this.fatherList[this.editFormIndex].props.auditVisible = newValue.auditVisible
          this.fatherList[this.editFormIndex].props.showUpperCase = newValue.showUpperCase
          this.fatherList[this.editFormIndex].props.type = newValue.type
          this.fatherList[this.editFormIndex].props.addLabel = newValue.addLabel
          this.fatherList[this.editFormIndex].props.required = newValue.required        
          this.fatherList[this.editFormIndex].props.print = newValue.print
        }
　　　},  
　　　deep: true  
　　}
  },
  computed: {
    ...mapGetters([
      'themes',
    ])
  },
  methods: {
    ...mapActions({
      setFormData: 'set_formData',
    }),
    // 获取表单内容
    getFormList () {
        if(this.themes.formdata) {
          const formData = JSON.parse(this.themes.formdata);
          const contents = formData.contents;
          if(contents) {
            this.fatherList = contents;
          }
          this.shenPiEdit.icon = formData.icon;
          this.shenPiEdit.color = formData.color;
          this.shenPiEdit.name = formData.name;
          this.shenPiEdit.description = formData.description;
          this.shenPiEdit.categoryId = formData.categoryId;
          this.shenPiEdit.commentRequired = formData.commentRequired;
          this.shenPiEdit.commentStarterVisible = formData.commentStarterVisible;
          
        }

    },

    handleFormDataForGet(content) {
      content.map((item,index)=>{
        if (item.componentName == 'CalenderRangeField') {
          item.props.id = JSON.stringify(item.props.id)
        }
      })
      return content
    },
    // 选择图标
    iconClick (item, index) {
      this.selectIconIndex = index;
      this.shenPiEdit.icon = item.icon;
      this.shenPiEdit.color = item.color;
    },
    // 表单数据改变时
    change (list) {
      this.fatherList = JSON.parse(JSON.stringify(list));
      list.map(item => {
        if (item.props.suite == 'suite') {
          this.disabled = true         
        }
      })  
      if (this.fatherList.length==0) {
        this.activeFormName = 'second'
      } else {
        this.activeFormName = 'first'
      }
    },
    // 明细数据改变时
    childChange (list, index) {
      this.editFormIndex = index;
      this.fatherList[index].children = JSON.parse(JSON.stringify(list))
    },
    // 鼠标移入
    hoverClick (index) {
      this.Index = index
    },
    // 鼠标移出
    mouseOut () {
      this.Index = -1
    },
     // 明细鼠标移入
    childHoverClick (index) {
      this.childIndex = index
    },
     // 明细鼠标移出
    childMouseOut () {
      this.childIndex = -1
    },
    // 删除选项
    checkRadioRemove (index) {
      this.editForm.options.splice(index, 1)
    },
     // 添加选项
    checkRadioAdd () {
      this.editForm.options.push('选项' + (this.editForm.options.length + 1))
    },
    // 点击表单元素
    formItemClick (element, index) {
      this.activeFormName = 'first';
      this.isChildClick = false;
      this.clickIndex = index;
      this.editFormIndex = index;
      this.childClickIndex = -1;
      this.editForm = JSON.parse(JSON.stringify(element.props));
      this.editForm.componentName = element.componentName;
      if (element.componentName == 'OvertimeSuite') {
        this.labelTitle = '加班核算方式'
      } else if (element.componentName == 'RecruitmentPlanSuite') {
        this.labelTitle = '招聘渠道'
      } else if (element.componentName == 'TrainPlanSuite') {
        this.labelTitle = '培训形式'
      } else if (element.componentName == 'CostSuite') {
        this.labelTitle = '支付方式'
      } else if (element.componentName == 'PaymentSuite') {
        this.labelTitle = '付款方式'
      } else if (element.componentName == 'SealUseSuite') {
        this.labelTitle = '用章类型'
      } else if (element.componentName == 'AptitudeSuite') {
        this.labelTitle = '资质种类'
      } else {
        this.labelTitle = '选项'
      }
    },
    // 点击明细表单元素 i子级 index父级
    formChildItemClick (element, i, index) {
      this.activeFormName = 'first';
      this.isChildClick = true;
      this.clickIndex = -1;
      this.editFormIndex = index;
      this.childClickIndex = i;
      this.editForm = JSON.parse(JSON.stringify(element.props));
      this.editForm.componentName = element.componentName
    },
    // 删除表单元素
    removeClick (index, id) {
      if (this.usedConditionField.length>0) {
        if(this.usedConditionField.indexOf(id)>-1) {
          this.$message.warning('该字段已作为流程条件,无法删除')
          return
        }
      } 
      if (this.fatherList[index].props.suite) {      
        this.disabled = false
      }
      this.fatherList.splice(index, 1);

      if (this.fatherList.length==0) {
        this.activeFormName = 'second'
      } else {
        this.activeFormName = 'first'
      }
    },
    // 删除明细的表单元素
    removeChildClick (arr, index, id) {
      if (this.usedConditionField.indexOf(id)>-1) {
        this.$message.warning('该字段已作为流程条件,无法删除')
        return
      } else {
        arr.splice(index, 1)
      }   
    },
    moved (item) {
      if(item.oldIndex == 12 && item.to.id == 'children') {
        this.$message.warning('明细内不能拖入明细控件')
        return false;
      }
      if (item.to.id == 'children') {
        this.formChildItemClick (this.kjList[item.oldIndex], item.newIndex, this.editFormIndex)
      } else {
        if (item.path[1].id == 'first') {
          this.formItemClick (this.kjList[item.oldIndex], item.newIndex)
        } else if (item.path[1].id == 'second') {
          this.formItemClick (this.cqList[item.oldIndex], item.newIndex)
        } else if (item.path[1].id == 'third') {
           this.formItemClick (this.rsList[item.oldIndex], item.newIndex)
        } else if (item.path[1].id == 'four') {
           this.formItemClick (this.xzList[item.oldIndex], item.newIndex)
        }
       
      }
     
    },
    focus (index) {
      this.onFocus = index
    },
    blur () {
      this.onFocus = -1
    },
    // 提交保存数据
    submitClick () {
      if(!this.shenPiEdit.name) {
        this.$message.info('请填写审批名称');
        return
      }

      this.loading = true;
      let isNull = true;
      this.buttonDisabled = true;
      this.fatherList.map(item => {
        if (item.componentName == 'AptitudeSuite') {
          item.children[0].props.options = item.props.options
        } else if (item.componentName == 'SealUseSuite') {
          item.children[0].props.options = item.props.options
        } else if (item.componentName == 'PaymentSuite') {
          item.children[7].props.options = item.props.options
        } else if (item.componentName == 'CostSuite') {
          item.children[5].props.options = item.props.options
        } else if (item.componentName == 'TrainPlanSuite') {
          item.children[3].props.options = item.props.options
        } else if (item.componentName == 'RecruitmentPlanSuite') {
          item.children[1].props.options = item.props.options
        } else if (item.componentName == 'OvertimeSuite') {
          item.children[2].props.options = item.props.options
        }
      });
      this.shenPiEdit.contents = this.fatherList;
      this.shenPiEdit.contents.map(item => {
        if (item.children) {
          if (item.children.length == 0) {
            this.$message.warning('明细组件内容为空，请填充组件内容')
            this.loading = false;
            isNull = false;
            return
          }
          this.handleSubmitFormData(item.children)
        }
      });

      if (!isNull) { return }
      //模拟数据请求
      const _this = this;
      setTimeout(function(){
        _this.callBack()
      },1000);
      this.setFormData(JSON.stringify(this.shenPiEdit));
    },
    //模拟数据请求
    callBack() {
      this.dialogVisible = true;
      this.loading = false;
    },
    handleSubmitFormData(components) {
      components.map(component => {
        if (component.componentName == 'CalenderRangeField') {
          if (component.props.id !== undefined && component.props.id instanceof Array) {
            component.props.id = JSON.stringify(component.props.id)
          }
        } else if (component.componentName == 'DetailField') {
          this.handleSubmitFormData(component.children)
        } else if (component.props.suite) {
          this.handleSubmitFormData(component.children)
        }
      });
    }
  }
}
</script>
<style lang="less" scoped>
  .editForm-box{
    min-width: 1140px;
    width:100%;
    margin:0 auto !important;
  }
  .Input{
    background: red;
  }
  .editForm{
    width:100%;
    padding:5px;
    box-sizing: border-box;
    background: url(../../assets/image/editFormBg.png) no-repeat;
    .submit-button{
      width:95px;
      margin:10px auto 0;
    }
    .edit-control,.wf-settingpanel{
      min-width:340px;
      width: 30%;
    }
    .wf-settingpanel{
      .formSet-item{
        padding-top:25px;
        color:#fff;
        label{
          font-size:12px;
          display: block;
          padding:5px 0;
          font-weight: bold;
          span{
            color:#f1f1f1;
            margin-left:10px;
            font-weight: 500;
          }
        }
        input,textarea{
          width:100%;
          box-sizing: border-box;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.6);
          color: #fff;
          padding: 6px 10px;
          border-radius: 2px;
          outline: none;
          font-size: 12px;
        }
        textarea{
          height:50px;
          resize:none;
        }
        input[type="checkbox"]{
          width:18px;
        }
        .onFocus{
          background: rgba(255,255,255,0);
          border: 1px solid #008cee;
        }
        .check-radio{
          margin-top:10px;
          .fa{
            font-size:18px;
            color:#000;
            margin-left:5px;
            cursor:pointer;
          }
        }
      }
    }
    .wf-component{
      height: auto;
      cursor: move;
      position:relative;
      box-sizing:border-box;
      border:1px solid #ccc;
      margin-top:5px;     
      .Input-close{
        width:18px;
        height:18px;
        background:	#1C86EE;
        color:#fff;
        text-align:center;
        position:absolute;
        right:0;
        top:0;
        cursor: pointer;
      }
    }
    .hover{
      border:1px dashed #008cee;
    }
    .clickStyle{
      border:1px solid #008cee;
    }
    .Input{
      padding:15px;
      background:#fff;
      border-bottom:1px solid #ccc;
      .label{
        font-size:14px;
      }
      .tsMsg{
        font-size:14px;
        color:#ccc;
      }
    }   
    .dateTimes-box{
      position:relative;
    }
    .InputDetail-box{
      position:relative;
      margin:5px 0;
      .InputDetail-label{
        padding:15px;
        width:100%;
        box-sizing: border-box;
        background:#f1f1f1;
      }
      .Input-close{
        width:18px;
        height:18px;
        background:	#1C86EE;
        color:#fff;
        text-align:center;
        position:absolute;
        right:0;
        top:0;
      }
      .wf-component{
        box-sizing: border-box;
        margin:0;
        border:1px solid #fff;
        border-bottom:1px solid #ccc
      }  
      .hover{
        border:1px dashed #008cee;
      }  
      .clickStyle{
        border:1px solid #008cee;
      }  
      .addLabel{
        box-sizing: border-box;
        text-align:center;
        color:#008cee;
        padding:15px;
        background:#f7f9ff;
        width:100%;
      }
    }
    .InputDetail-box{
      box-sizing: border-box;
      width:100%;
    }
    .InputDetail-content{
      box-sizing: border-box;
      width:100%;
      padding:5px 0;
      background:#ddeff3;
      min-height: 90px;
      text-align:center;
      box-sizing: border-box;
    }
    .wf-formcanvas{
      width:400px;
      min-height:720px;
      background: url(../../assets/image/editform-canvasBg.png) no-repeat;
      background-size:100%;
      margin:0 20px;
    }
  }
  .wf-widgetsitem {
    border: 1px dashed rgba(255,255,255,0.6);
    background: rgba(255,255,255,0.1);
    margin: 0 15px 15px 0;
    min-width: 125px;
    width: 45%;
    height: 42px;
    float: left;
    font-size: 12px;
    line-height: 42px;
    text-align: left;
    padding-left: 15px;
    cursor: move;
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  // 图标样式

  .icon-box{
    width: 45px;
    height: 45px;
    background:#fff;
    margin: 5px;
    float: left;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid transparent;
    overflow: hidden;
    position: relative;
    padding:7px;
    .iconItem{
      width:30px;
      height:30px;
      border-radius: 3px;
      text-align: center;
      line-height: 30px;
      .IconImg{
        color:#fff;
        .iconfont{
          font-size:20px;
        }
      }
    }
    .selectIcon{
      position:absolute;
      right:0px;
      bottom:0px;
      width:16px;
      height:16px;
      font-size:14px;
      background:	#1E90FF;
      color:#fff;
      text-align: center;
      line-height:16px;
      border-radius: 50%;
    }
  }
  .iconActive{
    border:1px solid #3f9af9;
  }
  .nodrag{
    position:absolute;
    width:100%;
    height:100%;
    left:-16px;
    top:-16px;
    z-index: 999999999;
    cursor: not-allowed;
  }
  .disabled{
    opacity: 0.2;
    cursor: not-allowed;
  }
</style>
